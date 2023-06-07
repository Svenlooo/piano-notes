<template>
  <div id="app-wrapper">
    <VitePwaManifest />
    <NuxtLayout>
      <div class="title">
        <h1 class="title__heading">Piano Notes</h1>
        <span class="title__subline">by Sven Lochner</span>
      </div>
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
