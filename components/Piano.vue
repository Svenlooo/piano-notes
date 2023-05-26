<template>
  <div class="piano">
    <Sheet ref="sheet" />
    <Keyboard @play="handleNote($event)" />
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";

const store = useGamesStore();
const sheet = ref();

/**
 * Distribute information about the played note.
 * @param {string} note
 */
const handleNote = (note) => {
  // Update current note in store with the value of "correct"
  const newAttempts = store.lastNote.attempts + 1;
  const newPlayed = sheet.value.checkNote(note);

  store.updateLastNote(newAttempts, newPlayed);
  store.syncGameList();
};
</script>

<style lang="scss" scoped>
.piano {
  display: flex;
  flex-flow: column nowrap;
  height: auto;

  @media screen and (orientation: landscape) {
    flex-flow: row nowrap;
  }

  & .sheet {
    height: 50%;
    z-index: 1;

    @media screen and (orientation: landscape) {
      height: 100%;
      width: 50vw;
    }
  }

  & .keyboard {
    height: 50%;
    z-index: 0;

    @media screen and (orientation: landscape) {
      height: 100%;
      width: 50vw;
    }
  }
}
</style>
