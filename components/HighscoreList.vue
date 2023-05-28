<template>
  <div class="highscoreList">
    <ClientOnly fallback="Loading highscore list...">
      <ul class="highscoreList__list" v-if="pastGames.length > 0">
        <li
          class="highscoreList__list-item"
          v-for="(game, index) in pastGames"
          :key="index"
        >
          <Icon
            class="highscoreList__icon"
            name="game-icons:trash-can"
            @click="handleDelete(index)"
          />
          <div>{{ parseDay(game.startDate) }}</div>
          <div>{{ parseTime(game.startDate) }}</div>
          <div class="highscoreList__score">
            <span class="label">Score:</span>
            <span class="value">{{ game.score }} %</span>
          </div>
        </li>
      </ul>
      <div v-else>
        No games.
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();

/**
 * Gets the list of past games from the store.
 * @returns {Array<Game>} - the list
 */
const pastGames = computed(() => {
  const pastGames = store.getPastGames();
  return pastGames;
});

/**
 * Returns the day the game has been started.
 * @param {string} dateString - e.g. 23.05.2023
 */
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

/**
 * Returns the time the game has been started.
 * @param {string} dateString - e.g. 19:45 Uhr
 */
const parseTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Format the time as "hh:mm Uhr"
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } Uhr`;
};

/**
 * Handles the delete game click.
 * @param {number} index - Index of the game to delete from localstorage
 */
const handleDelete = (index) => {
    // TODO: Instead of confirm(), create a nice looking modal
  if (confirm("Do you really want to delete this game?")) {
    store.deleteGame(index);
  }
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

    @media (min-width: map-get($breakpoints, "md")) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: map-get($breakpoints, "lg")) {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  &__list-item {
    position: relative;
    padding: 16px;
    background-color: var(--color-piano-black-key);
    border-radius: 4px;
    aspect-ratio: 1/1;
    color: var(--color-light);
    display: flex;
    flex-flow: column nowrap;
  }

  &__icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }

  &__score {
    flex: 1;

    & .label {
    }
    & .value {
      font-size: 2em;
    }
  }
}
</style>
