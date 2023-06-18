<template>
  <div class="highscoreListGame">
    <Icon
      class="highscoreListGame__icon"
      name="game-icons:trash-can"
      @click="handleDelete(index)"
    />
    <div class="highscoreListGame__meta">
      {{ parseDay(game.startDate) }}<br />{{ parseTime(game.startDate) }}
    </div>
    <div class="highscoreListGame__meta highscoreListGame__meta--score">
      <span class="value">{{ game.score }}%</span>
      <br />
      <span class="label">Notes played correctly</span>
    </div>
  </div>
</template>

<script setup>
/**
 * Displays a single game.
 * Doubles as the modal's content.
 */
import { useGamesStore } from "~/store/games";

const store = useGamesStore();

const props = defineProps({
  game: {
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

/**
 * Returns the day the game has been started.
 * @param {string} dateString - e.g. 23.05.2023
 */
const parseDay = (dateString) => {
  const date = new Date(dateString);
  const optionsDate = { day: "2-digit", month: "2-digit", year: "numeric" };
  const complete = new Intl.DateTimeFormat("de-DE", optionsDate).format(date);
  return complete;
};

/**
 * Returns the time the game has been started.
 * @param {string} dateString - e.g. 19:45 Uhr
 */
const parseTime = (dateString) => {
  const date = new Date(dateString);
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: false };
  const time = new Intl.DateTimeFormat("de-DE", optionsTime).format(date);
  return `${time} Uhr`;
};

/**
 * Handles the delete game click.
 * @param {number} index - Index of the game to delete from localstorage
 */
const handleDelete = (index) => {
  if (confirm("Do you really want to delete this game?")) {
    store.deleteGame(index);
  }
};
</script>

<style lang="scss">
.highscoreListGame {
  position: relative;
  padding: 16px;
  background-color: var(--color-piano-black);
  border-radius: 4px;
  aspect-ratio: 1/1;
  color: var(--color-light);
  display: flex;
  flex-flow: row wrap;

  &__icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    cursor: pointer;
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
}
</style>
