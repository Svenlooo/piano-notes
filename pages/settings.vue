<template>
  <div class="settings">
    <h1>Settings</h1>

    <SettingsOption
      label="Dark Mode"
      icon="bi:yin-yang"
      data-cy="settingsDarkMode"
    >
      <UIComponentsToggle id="darkmode" v-model="isDarkMode" />
    </SettingsOption>

    <SettingsOption
      label="Include black keys"
      icon="game-icons:piano-keys"
      data-cy="settingsblackKeysToggle"
    >
      <UIComponentsToggle
        id="blackKeysToggle"
        v-model="settingsStore.blackKeys"
      />
    </SettingsOption>

    <SettingsOption
      label="Show only successful plays"
      icon="fluent:music-note-1-24-filled"
      data-cy="settingsSuccessOnly"
    >
      <UIComponentsToggle
        id="successOnly"
        v-model="settingsStore.successOnly"
      />
    </SettingsOption>
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

const settingsStore = useSettingsStore();

/**
 * Returns or sets the current theme.
 * @param {"light" | "dark"} theme name
 */
const isDarkMode = computed({
  get: () => (settingsStore.theme === "dark" ? true : false),
  set: (value) => settingsStore.setTheme(value),
});
</script>

<style lang="scss" scoped>
.settings {
  padding: var(--content-padding);
}
</style>
