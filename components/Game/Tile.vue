<template>
  <div class="gameTile">
    <Icon
      class="gameTile__icon"
      name="game-icons:trash-can"
      @click="handleDelete(index)"
    />
    <div class="gameTile__meta">
      {{ parseDay(game.startDate) }}<br />{{ parseTime(game.startDate) }}
      Uhr
    </div>
    <div class="gameTile__meta gameTile__meta--score">
      <span class="value">{{ game.score }}%</span>
      <br />
      <span class="label">Notes played correctly</span>
    </div>
  </div>
</template>

<script setup>
import { parseDay, parseTime } from '~/utils/dates';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  game: {
    required: true,
  },
});

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
.gameTile {
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
    color: var(--color-light2);
  }

  &__meta {
    width: 100%;
    color: var(--color-light2);
    text-align: left;

    &--score {
      align-self: flex-end;

      & .value {
        font-size: 3em;
      }
      & .label {
        font-size: 0.8em;
      }
    }
  }
}
</style>
