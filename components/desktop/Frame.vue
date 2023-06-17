<template>
  <div class="frame">
    <svg
      class="frame__svg"
      :class="statusStore.loadingScreenAnimationComplete && 'animate'"
      :width="svgWidth"
      :height="svgHeight"
      :viewBox="svgViewBox"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect
        :width="rectWidth"
        :height="rectHeight"
        x="2.5"
        y="2.5"
        rx="30"
        class="animated-rect"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<script setup>
import { useStatusStore } from "~/store/status";

const statusStore = useStatusStore();

let svgWidth = ref("1034");
let svgHeight = ref("460");
let svgViewBox = ref("0 0 1034 460");
let rectWidth = ref("100%");
let rectHeight = ref("100%");

/**
 * Sets the SVG's size attributes, according to the screen's orientation.
 * This is required to prevent the <rect> element from distorting.
 */
const updateSvgAttributes = () => {
  if (window.matchMedia("(orientation: portrait)").matches) {
    svgWidth.value = "460";
    svgHeight.value = "1034";
    svgViewBox.value = "0 0 460 1034";
  } else {
    svgWidth.value = "1034";
    svgHeight.value = "460";
    svgViewBox.value = "0 0 1034 460";
  }
};

onMounted(() => {
  window.addEventListener("resize", updateSvgAttributes);
  updateSvgAttributes();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSvgAttributes);
});
</script>

<style lang="scss">
.frame {
  --stroke-width: 5px;
  --width: calc(100% - var(--stroke-width));
  --height: calc(100% - var(--stroke-width));

  &__svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    @include appSize(10px);

    @media #{map-get($mediaSituations, 'fills-screen')} {
      display: none;
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
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
