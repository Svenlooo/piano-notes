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
          <div class="highscoreList__meta">
            {{ parseDay(game.startDate) }}<br />{{ parseTime(game.startDate) }}
          </div>
          <div class="highscoreList__meta highscoreList__meta--score">
            <span class="value">{{ game.score }}%</span>
            <br />
            <span class="label">Notes played correctly</span>
          </div>
        </li>
      </ul>
      <div v-else class="highscoreList--empty">
        <NuxtLink to="/" class="emptyListIcon">
          <Icon class="emptyListIcon__icon" name="game-icons:piano-keys" />
          <br />
          <span class="emptyListIcon__cta">Go ahead and start a new game!</span>
        </NuxtLink>
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
  &--empty {
    height: calc(100% - 80px); // Magic number: Height of heading
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media (min-width: map-get($breakpoints, "xs")) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: map-get($breakpoints, "sm")) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: map-get($breakpoints, "md")) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__list-item {
    position: relative;
    padding: 16px;
    background-color: var(--color-piano-black);
    border-radius: 4px;
    aspect-ratio: 1/1;
    color: var(--color-light);
    display: flex;
    flex-flow: row wrap;
  }

  &__icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }

  &__meta {
    width: 100%;

    &--score {
      align-self: flex-end;

      & .value {
        font-size: 3em;
        color: var(--color-light2);
      }
      & .label {
        font-size: 0.8em;
      }
    }
  }

  & .emptyListIcon {
    text-align: center;

    &__icon {
      width: 200px;
      height: auto;
      color: var(--color-white);
      opacity: .8;
    }
    &__label {

    }
  }
}
</style>
