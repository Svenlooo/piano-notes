<template>
  <div id="app-wrapper">
    <VitePwaManifest />
    <LoadingScreen />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSettingsStore } from "~/store/settings";

const settingsStore = useSettingsStore();
const { t } = useI18n();

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
}
</style>
