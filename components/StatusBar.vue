<template>
  <div class="statusBar">
    <div class="statusBar__item statusBar__item--successful" v-if="successfulAttempts > 0">
      <Icon name="ph:check-circle" />
      {{ successfulAttempts }}
    </div>
    <div class="statusBar__item statusBar__item--unsuccessful" v-if="unsuccessfulAttempts > 0">
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
    padding: 0 8px;

    &--successful {
      color: var(--color-green);
    }
    &--unsuccessful {
      color: var(--color-red);
    }
  }
}
</style>
