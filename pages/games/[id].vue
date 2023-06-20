<template>
  <div class="gameDetail">
    <ClientOnly>
      <div v-if="game">
        <h1>Game Detail Page {{ $route.params.id }}</h1>
        <p>Highscore: {{ game.score }}</p>
      </div>
      <h1 v-else>No game under this id :(</h1>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const route = useRoute();
const gamesStore = useGamesStore();
const game = gamesStore.getGame(route.params.id);

console.log(game);

</script>
