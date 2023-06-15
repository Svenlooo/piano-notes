<template>
  <div
    :style="`--loading-duration-ms: ${config.animationDuration}ms;`"
    :class="[
      $style.loadingScreen,
      statusStore.appResourcesLoading ? $style.loading : $style.loaded,
      statusStore.loadingScreenAnimationInProgress && $style.animating,
    ]"
  >
    <SvgoClef
      :class="$style.loadingIcon"
      :style="'width: 250px;height: 250px;'"
    />
  </div>
</template>

<script setup lang="ts">
/**
  Show loading screen -> Loading done ->
  start animation (duration) -> after animation done: remove loading screen
 */
import { useStatusStore } from "~/store/status";

const statusStore = useStatusStore();

const nuxtApp = useNuxtApp();

const config = {
  animationDuration: 600, // Duration of the loading screen transition
  uiAnimationsStart: 200, // Starting time of UI animations
};

nuxtApp.hook("app:mounted", () => loadingComplete());

/**
 * Functions to perform after the loading has been completed.
 */
const loadingComplete = () => {
  statusStore.loadingScreenAnimationInProgress = true;

  // Wait until the animation has completed, before hiding the loading screen.
  setTimeout(() => {
    statusStore.appResourcesLoading = false;
    statusStore.loadingScreenAnimationInProgress = false;
  }, config.animationDuration);

  setTimeout(() => {
    statusStore.loadingScreenAnimationComplete = true;
  }, config.uiAnimationsStart)
};
</script>

<style lang="scss" module>
.loadingScreen {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    179.6deg,
    var(--color-light) 1.07%,
    var(--color-light2) 98.55%
  );
  opacity: 1;
  transition: all var(--loading-duration-ms);
}

.loadingIcon {
  width: 100%;
  max-width: 250px;
  height: auto;
  animation: pulseAnimation 1500ms ease-in-out infinite;
}

.animating {
  opacity: 0;
}

.loaded {
  display: none;
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
