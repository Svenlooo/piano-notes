<template>
  <div id="app-wrapper">
    <VitePwaManifest />
    <LoadingScreen />
    <NuxtLayout>
      <DesktopTitle
        class="title"
        title="Piano Notes"
        subline="by Sven Lochner"
      />
      <DesktopFrame>
        <div class="page-wrapper">
          <NuxtPage class="page" />
          <Navigation />
        </div>
      </DesktopFrame>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSettingsStore } from "~/store/settings";

const settingsStore = useSettingsStore();

// Set theme on init
watch(
  () => settingsStore.theme,
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

  & .title {
    position: fixed;
    top: 60px;
    opacity: 1;

    @media #{map-get($mediaSituations, 'fills-screen')} {
      display: none;
    }

    /** Magic numbers used for fading out headline + subline below specific screen sizes */
    &__heading {
      @media #{map-get($mediaSituations, 'landscape')} and (max-height: 800px) {
        opacity: 0;
      }
      @media #{map-get($mediaSituations, 'portrait')} and (max-height: 1370px) {
        opacity: 0;
      }
    }

    &__subline {
      transition-delay: 0ms;

      @media #{map-get($mediaSituations, 'landscape')} and (max-height: 870px) {
        opacity: 0;
      }
      @media #{map-get($mediaSituations, 'portrait')} and (max-height: 1450px) {
        opacity: 0;
      }
    }
  }

  /** Global layout */
  & .page-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: content-box;
    border-radius: 28px;
    box-shadow: 10px 10px 71px 0px rgba(0, 0, 0, 0.15);
    z-index: 1;
    @include appSize;

    @media #{map-get($mediaSituations, 'landscape')} {
      flex-direction: row;
    }

    @media #{map-get($mediaSituations, 'fills-screen')} {
      border-radius: 0px;
      box-sizing: border-box;
      box-shadow: none;
      border: none;
    }

    & > .page {
      flex: 1;
    }
  }

  & .footer {
    margin-bottom: 30px;
  }
}
</style>
