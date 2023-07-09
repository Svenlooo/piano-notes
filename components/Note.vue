<template>
  <div class="note">
    <svg ref="svg" class="note__svg" viewBox="0 0 33 19" fill="none">
      <path
        d="M16.4867 0C7.37875 0 0 4.27343 0 9.51285C0 14.7523 7.37876 19 16.4867 19C25.5946 19 33 14.7523 33 9.51285C33 4.27342 25.5946 -1.64546e-05 16.4867 0ZM12.4584 1.7226C14.8268 1.69291 17.7446 2.58599 20.4883 4.37077C25.3659 7.5437 27.813 12.3222 25.9572 15.0149C24.1014 17.7075 18.6431 17.3137 13.7656 14.1407C8.888 10.9678 6.44088 6.18926 8.29669 3.49662C9.1086 2.31858 10.6163 1.74569 12.4584 1.7226Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  position: {
    type: String,
    default: "c",
  },
  octave: {
    type: Number,
    default: 4,
  },
});

const svg = ref();

/**
 * Triggers a shake animation on the note.
 */
const shake = () => {
  svg.value.classList.add("shake");

  setTimeout(() => {
    if (svg.value !== null) {
      svg.value.classList.remove("shake");
    }
  }, 500);
};

defineExpose({
  shake,
})
</script>

<style lang="scss" scoped>
.note {
  height: 20%;

  &__svg {
    height: 100%;
  }

  & .shake {
    animation: shake 0.5s;
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-3px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
