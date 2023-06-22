<template>
  <div class="highscoreList">
    <ClientOnly fallback="Loading highscore list...">
      <ul class="highscoreList__list" v-if="pastGames.length > 0">
        <li v-for="(game, index) in pastGames" :key="index">
          <Modal>
            <template v-slot:trigger>
              <GameTile :index="game.originalIndex" :game="game" />
            </template>
            <template v-slot:content>
              <GameDetail :index="game.originalIndex" :game="game" />
            </template>
          </Modal>
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
 * Gets the chronological list of past games from the store.
 * It must be reversed to be in chronological order.
 * To ensure correct mapping to the store, the original index must be saved.
 * @returns {Array<Game>} - the list
 */
const pastGames = computed(() => {
  const pastGames = store.getPastGames();
  const pastGamesWithOriginalIndex = pastGames.map((game, index) => {
    return { ...game, originalIndex: index };
  });
  return pastGamesWithOriginalIndex.slice().reverse();
});
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

      @media #{map-get($mediaSituations, 'portrait')} {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: map-get($breakpoints, "md")) {
      grid-template-columns: repeat(4, 1fr);

      @media #{map-get($mediaSituations, 'portrait')} {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  & .emptyListIcon {
    text-align: center;

    &__icon {
      width: 200px;
      height: auto;
      color: var(--color-white);
      opacity: 0.8;
    }
  }
}
</style>
