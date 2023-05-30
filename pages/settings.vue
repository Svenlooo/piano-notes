<template>
  <div>
    <main>
      <ul>
        <li>
          <input type="radio" id="light" value="light" v-model="isDarkMode" />
          <label for="light">Light</label>
          <input type="radio" id="dark" value="dark" v-model="isDarkMode" />
          <label for="dark">Dark</label>
        </li>
        <li>Black keys toggle</li>
        <li>
          <label for="successOnly">Show only successful plays:</label
          ><input
            id="successOnly"
            type="checkbox"
            v-model="settings.successOnly"
          />
        </li>
      </ul>
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
  get: () => (settings.theme === "dark" ? "dark" : "light"),
  set: (value) => settings.setTheme(value),
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--content-padding);
}
</style>
