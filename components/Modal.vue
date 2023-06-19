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
      <button @click="toggleModal">close me!</button>
      <div
        :class="[$style.content, revealContent && $style['content--visible']]"
      >
        <slot name="content" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  /** Width at start of animation */
  startWidth: {
    type: Number,
    required: false,
  },

  /** Height at start of animation  */
  startHeight: {
    type: Number,
    required: false,
  },

  openAnimationTime: {
    type: Number,
    default: 2000,
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
   *      1. get position of trigger on screen
   *      2. set top + left values of temporary overlay
   *      3. enlargen it to match modal's size
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
};

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick();
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

    modal.value.style.transition = 'none';
    modal.value.style.top = `${triggerPosition.top + topDifference}px`;
    modal.value.style.left = `${triggerPosition.left}px`;
    modal.value.style.width = `${triggerPosition.width}px`;
    modal.value.style.height = `${
      triggerPosition.height - bottomDifference - topDifference
    }px`;

    setTimeout(() => {
      modal.value.removeAttribute("style");
    }, 10)

    setTimeout(() => {
      animating.value = false;
      animatingDone.value = true;
      revealContent.value = true;
    }, props.openAnimationTime);
  } else {
    console.log("closing");
  }
});
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
  background-color: var(--color-piano-black);
  transition: all 300ms;
  transform-origin: center;
  inset: 5%;
  width: calc(100vw - 10%);
  height: calc(100vh - 10%);

  & .content {
    opacity: 0;
    padding: 40px;
    transition: opacity 400ms;

    &--visible {
      opacity: 1;
    }
  }
}
</style>
