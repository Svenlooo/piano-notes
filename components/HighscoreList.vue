<template>
  <div class="highscoreList">
    <ClientOnly fallback="Loading highscore list...">
      <ul class="highscoreList__list">
        <li
          class="highscoreList__list-item"
          v-for="(game, index) in pastGames"
          :key="index"
        >
          <Icon name="fluent:music-note-1-24-filled" />
          <div>{{ parseDay(game.startDate) }}</div>
          <div>{{ parseTime(game.startDate) }}</div>
          <div class="highscoreList__score">
            <span class="label">Score:</span>
            <span class="value">{{ game.score }} %</span>
          </div>
        </li>
      </ul>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();

const pastGames = computed(() => {
  const pastGames = store.getPastGames();
  console.log("PastGames", pastGames);
  return pastGames;
});

const parseDay = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  // Format the date as "dd.mm.yyyy"
  return `${day < 10 ? "0" + day : day}.${
    month < 10 ? "0" + month : month
  }.${year}`;
};

const parseTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Format the time as "hh:mm Uhr"
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } Uhr`;
};
</script>

<style lang="scss" scoped>
.highscoreList {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media (min-width: map-get($breakpoints, 'md')) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: map-get($breakpoints, 'lg')) {
        grid-template-columns: repeat(6, 1fr);
    }
  }

  &__list-item {
    padding: 16px;
    background-color: var(--color-piano-black-key);
    border-radius: 4px;
    aspect-ratio: 1/1;
    color: var(--color-light);
  }

  &__score {

    & .label {

    }
    & .value {
        font-size: 2em;
    }
  }
}
</style>
