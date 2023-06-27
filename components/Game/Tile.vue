<template>
  <div class="gameTile">
    <Icon
      class="gameTile__icon gameTile__icon--delete"
      name="game-icons:trash-can"
      @click.stop="handleDelete(game.originalIndex)"
    />
    <Icon
      class="gameTile__icon gameTile__icon--expand"
      name="ic:baseline-open-in-full"
    />
    <div class="gameTile__meta">
      {{ parseDay(game.startDate) }}<br />{{ parseTime(game.startDate) }}
      Uhr
    </div>
    <div class="gameTile__meta gameTile__meta--score">
      <span class="value">{{ game.score }}%</span>
      <br />
      <span class="label">Correct plays</span>
    </div>
  </div>
</template>

<script setup>
import { parseDay, parseTime } from "~/utils/dates";
import { useGamesStore } from "~/store/games";
const gamesStore = useGamesStore();

const props = defineProps({
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
    gamesStore.deleteGame(index);
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

  &:hover {
    cursor: pointer;
  }

  &__icon {
    position: absolute;
    width: 28px;
    height: 28px;
    cursor: pointer;
    color: var(--color-light2);
    @include buttonAnimation;

    &--delete {
      top: 16px;
      right: 16px;
    }
    &--expand {
      bottom: 16px;
      right: 16px;
    }
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
