<template>
  <div class="statusBar">
    <Icon name="ph:check-circle" />
    {{ store.currentGameSuccessfulAttempts }}
    <Icon name="ph:x-circle" />
    {{ store.currentGameFailedAttempts }}
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();
</script>

<style lang="scss" scoped>
  .statusBar {
    height: $statusBarHeight;
  }
</style>