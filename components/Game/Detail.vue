<template>
  <div class="gameDetailPage">
    <h1>{{ parseDay(game.startDate) }} | {{ parseTime(game.startDate) }} Uhr</h1>
  </div>
</template>

<script setup>
import { parseDay, parseTime } from "~/utils/dates";

const props = defineProps({
  game: {
    required: true,
  },
});

const adjacentIndexes = computed(() => {
    
})
</script>
