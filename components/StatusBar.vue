<template>
  <div>
    <Icon name="ph:check-circle" />
    <Icon name="ph:x-circle" />
    {{ totalErrors }}
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();

console.log(store.currentGame.notes);

const totalErrors = computed<Number>(() => {
  let attempts = 0;
  let correctAttempts = 0;
  store.currentGame.notes.forEach((game) => {
    attempts += game.attempts;
    correctAttempts += game.played ? 1 : 0;
  })
  return attempts - correctAttempts;
})

</script>
