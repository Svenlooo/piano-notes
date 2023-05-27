<template>
  <div class="statusBar">
    <div class="statusBar__item statusBar__item--successful" 
      :class="successfulAttempts > 0 && 'visible'">
      <Icon name="ph:check-circle" />
      {{ successfulAttempts }}
    </div>
    <div class="statusBar__item statusBar__item--unsuccessful"
      :class="unsuccessfulAttempts > 0 && 'visible'">
      <Icon name="ph:x-circle" />
      {{ unsuccessfulAttempts }}
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();

const successfulAttempts = computed(() => store.currentGameSuccessfulAttempts);
const unsuccessfulAttempts = computed(() => store.currentGameFailedAttempts);
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
