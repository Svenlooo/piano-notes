<template>
  <div id="app-wrapper">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage class="page-wrapper" />
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
