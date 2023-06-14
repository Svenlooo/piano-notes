<template>
  <div
    :style="`--loading-duration-ms: ${loadingOutDuration};`"
    :class="[$style.loadingScreen, loading ? $style.loading : $style.loaded]"
  >
    <SvgoClef :class="$style.loadingIcon" :style="'width: 250px;height: 250px;'" />
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

const loading = ref(true);

const loadingOutDuration = 400;

nuxtApp.hook("page:start", () => {
  loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

nuxtApp.hook("app:mounted", () => {
  loading.value = false;
});

/**
 * Responsible for hiding the screen completely.
 */
const hideLoadingScreen = computed(() => {});
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
}

.loadingIcon {
  width: 100%;
  max-width: 250px;
  height: auto;
  animation: pulseAnimation 1500ms ease-in-out infinite;
}

.loading {
  background: linear-gradient(
    179.6deg,
    var(--color-light) 1.07%,
    var(--color-light2) 98.55%
  );
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
