<template>
  <div>
    <main>
      <h1>Settings</h1>

      <SettingsOption
        id="darkmode"
        label="Dark Mode"
        icon="bi:yin-yang"
        v-model="isDarkMode"
      />

      <SettingsOption
        id="blackKeysToggle"
        label="Include black keys"
        icon="game-icons:piano-keys"
        v-model="settings.blackKeys"
      />

      <SettingsOption
        id="successOnly"
        label="Show only successful plays"
        icon="fluent:music-note-1-24-filled"
        v-model="settings.successOnly"
      />
    </main>
    <Navigation />
  </div>
</template>

<script setup>
import { useSettingsStore } from "~/store/settings";

useServerSeoMeta({
  title: "Piano Notes | Settings",
  ogTitle: "Piano Notes | Settings",
  twitterTitle: "Piano Notes | Settings",
  description: "Change your settings.",
  ogDescription: "Change your settings.",
  twitterDescription: "Change your settings.",
  ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
  twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
});

const settings = useSettingsStore();

/**
 * Returns or sets the current theme.
 * @param {"light" | "dark"} theme name
 */
const isDarkMode = computed({
  get: () => (settings.theme === "dark" ? true : false),
  set: (value) => settings.setTheme(value),
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--content-padding);
}
</style>
