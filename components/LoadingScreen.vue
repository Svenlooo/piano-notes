<template>
  <div
    :style="`--loading-duration-ms: ${config.animationDuration}ms;`"
    :class="[
      $style.loadingScreen,
      statusStore.loading ? $style.loading : $style.loaded,
      animationsRunning && $style.animating,
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

const animationsRunning = ref(false);

const config = {
  animationDuration: 600,
};

/**
 * Functions to perform after the loading has been completed.
 */
const loadingComplete = () => {
  animationsRunning.value = true;

  // Wait until the animation has completed, before hiding the loading screen.
  setTimeout(() => {
    statusStore.loading = false;
    animationsRunning.value = false;
  }, config.animationDuration);
};

onBeforeMount(() => {
  if (document.readyState === "complete") {
    loadingComplete();
  } else {
    window.onload = loadingComplete;
  }
});
</script>

<style lang="scss" module>
.loadingScreen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
