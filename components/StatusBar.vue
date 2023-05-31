<template>
  <div class="statusBar">
    <ClientOnly>
      <div
        class="statusBar__item statusBar__item--successful"
        :class="successfulAttempts > 0 && 'visible'"
      >
        <Icon name="fluent:music-note-1-24-filled" />
        {{ successfulAttempts }}
      </div>
      <div
        class="statusBar__item statusBar__item--unsuccessful"
        v-show="!settings.successOnly"
        :class="unsuccessfulAttempts > 0 && 'visible'"
      >
        <Icon name="fluent:music-note-off-1-24-filled" />
        {{ unsuccessfulAttempts }}
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";
import { useSettingsStore } from "~/store/settings";

const games = useGamesStore();
const settings = useSettingsStore();

const successfulAttempts = computed(() => games.currentGameSuccessfulAttempts);
const unsuccessfulAttempts = computed(() => games.currentGameFailedAttempts);
</script>

<style lang="scss" scoped>
.statusBar {
  height: $statusBarHeight;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  &__item {
    opacity: 0;
    width: 0;
    height: inherit;
    padding: 0 8px;
    transition: opacity 800ms;

    &--successful {
      color: var(--color-green);
    }
    &--unsuccessful {
      color: var(--color-red);
    }

    &.visible {
      width: auto;
      opacity: 1;
    }
  }
}
</style>
