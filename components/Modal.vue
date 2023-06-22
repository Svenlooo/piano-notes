<template>
  <button :class="$style.trigger" @click="toggleModal" ref="trigger">
    <slot name="trigger" />
  </button>

  <Teleport to="body">
    <div
      :class="[$style.modal, animatingDone && $style.fullSize]"
      v-if="open"
      ref="modal"
    >
      <div
        :class="[$style.content, revealContent && $style['content--visible']]"
      >
        <button @click="toggleModal">close me!</button>
        <slot name="content" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  openAnimationTime: {
    type: Number,
    default: 200,
    required: true,
  },
});

const trigger = ref(null);
const modal = ref(null);

const open = ref(false);
const animating = ref(false);
const animatingDone = ref(false);
const revealContent = ref(false);

const toggleModal = () => {
  /**
   * Trigger clicked ->
   *  open?
   *      1. get position of trigger on screen              √
   *      2. set top + left values of temporary overlay     √
   *      3. enlargen it to match modal's size              √
   *      4. hide temporary overlay while revealing modal
   *      5. animate content in
   */
  !open.value ? openModal() : closeModal();
};

const openModal = () => {
  open.value = true;
  animating.value = true;
};

const closeModal = () => {
  open.value = false;
  animatingDone.value = false;
  revealContent.value = false;
};

/**
 * Calculates and applies the initial size of the trigger, before it is
 * expanded to the full-sized modal.
 * Enables the animation by
 * 1) adding the calculated size and position values
 * 2) removing them shortly after, to enable the transition to the modal's stylesheet.
 */
const startOpenAnimation = () => {
  const frame = document.querySelector(".frame");
  const framePosition = frame.getBoundingClientRect();
  const triggerPosition = trigger.value.getBoundingClientRect();

  let bottomDifference = 0;
  if (framePosition.bottom < triggerPosition.bottom) {
    bottomDifference += triggerPosition.bottom - framePosition.bottom;
  }

  let topDifference = 0;
  if (framePosition.top > triggerPosition.top) {
    topDifference += framePosition.top - triggerPosition.top;
  }

  modal.value.style.setProperty(
    "--modal-open-animation-time",
    `${props.openAnimationTime}ms`
  );
  modal.value.style.setProperty("transition", "none");
  modal.value.style.setProperty(
    "top",
    `${triggerPosition.top + topDifference}px`
  );
  modal.value.style.setProperty("left", `${triggerPosition.left}px`);
  modal.value.style.setProperty("width", `${triggerPosition.width}px`);
  modal.value.style.setProperty(
    "height",
    `${triggerPosition.height - bottomDifference - topDifference}px`
  );

  // Remove for default styles to take effect.
  setTimeout(() => {
    modal.value.style.removeProperty("transition");
    modal.value.style.removeProperty("top");
    modal.value.style.removeProperty("left");
    modal.value.style.removeProperty("width");
    modal.value.style.removeProperty("height");
  }, 10);
};

/**
 * Handles all keydown events fired, when the modal is open
 * @param {Event} e
 */
const keydownHandler = (e) => {
  // Close
  if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
    closeModal();

    // Switch between games
  } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
    console.log("Previous game");
  } else if (e.key === "ArrowRight" || e.keyCode === 39) {
    console.log("Next game");
  }
};

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick();
    startOpenAnimation();

    setTimeout(() => {
      animating.value = false;
      animatingDone.value = true;
      revealContent.value = true;
    }, props.openAnimationTime);

    window.addEventListener("keydown", keydownHandler);
  } else {
    console.log("closing");
    window.removeEventListener("keydown", keydownHandler);
  }
});

watch(
  () => props.openAnimationTime,
  (newVal) => {
    if (modal.value) {
      modal.value.style.setProperty(
        "--modal-open-animation-time",
        `${newVal}ms`
      );
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.trigger {
  padding: 0;
  border: 0;
  background: transparent;
}

.modal {
  position: fixed;
  z-index: 99;
  border-radius: 32px;
  background-color: var(--color-piano-black);
  color: var(--color-white);
  transition: all var(--modal-open-animation-time);
  transform-origin: center;
  inset: 8px;
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);

  & .content {
    opacity: 0;
    padding: 40px;
    transition: opacity var(--modal-open-animation-time);

    &--visible {
      opacity: 1;
    }
  }
}
</style>
