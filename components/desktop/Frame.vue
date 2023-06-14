<template>
  <svg
    class="frame"
    width="1034"
    height="460"
    viewBox="0 0 1034 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref="frame"
    preserveAspectRatio="none"
  >
    <rect
      x="2.5"
      y="2.5"
      rx="30"
      stroke="black"
      class="animated-rect"
    />
  </svg>
</template>

<script setup>
const frame = ref(null);

onMounted(() => {
  frame.value.classList.add("animate");
});
</script>

<style lang="scss">
.frame {
  --stroke-width: 5px;
  --width: calc(100% - var(--stroke-width));
  --height: calc(100% - var(--stroke-width));

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  width: 100vw;
  height: 100vh;
  max-width: 1034px;
  max-height: 460px;

  @media #{map-get($mediaSituations, 'portrait')} {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  & .animated-rect {
    width: var(--width);
    height: var(--height);
    stroke: transparent;
    stroke-width: var(--stroke-width);
  }

  &.animate .animated-rect {
    stroke: var(--color-piano-black);
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
    animation: draw 1000ms cubic-bezier(0.83, 0, 0.17, 1) forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
