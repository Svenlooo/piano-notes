<template>
  <div id="app-wrapper">
    <VitePwaManifest />
    <NuxtLayout>
      <DesktopTitle title="Piano Notes" />
      <NuxtPage class="page-wrapper" />
      <DesktopFooter text="by Sven Lochner" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSettingsStore } from "~/store/settings";

const settings = useSettingsStore();

// Set theme on init
watch(
  () => settings.theme,
  (newTheme) => {
    if (process.client) {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss">
#app-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  /** Global layout */
  & .page-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100dvw;
    max-height: map-get($contentMaxSizes, "portrait-max-height");
    max-width: map-get($contentMaxSizes, "portrait-max-width");
    overflow: hidden;
    box-sizing: content-box;
    border-radius: 32px;
    box-shadow: 10px 10px 71px 0px rgba(0, 0, 0, 0.15);
    border: solid var(--color-piano-black) 5px;
    background: linear-gradient(
      179.6deg,
      var(--color-light) 1.07%,
      var(--color-light2) 98.55%
    );

    @media #{map-get($mediaSituations, 'landscape')} {
      flex-direction: row;
      max-height: map-get($contentMaxSizes, "landscape-max-height");
      max-width: map-get($contentMaxSizes, "landscape-max-width");
    }

    @media #{map-get($mediaSituations, 'fills-screen')} {
      border-radius: 0px;
      box-sizing: border-box;
      box-shadow: none;
      border: none;
    }

    & > main {
      flex: 1;
    }
  }
}
</style>
