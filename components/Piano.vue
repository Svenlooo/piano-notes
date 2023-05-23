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
  const lastNote = store.currentGame.notes[store.currentGame.notes.length - 1];
  lastNote.attempts += 1;
  if (lastNote.correct === null) {
    lastNote.correct = sheet.value.checkNote(note);
  } else {
    sheet.value.checkNote(note);
  }
};
</script>

<style lang="scss" scoped>
.piano {
  display: flex;
  flex-flow: column nowrap;

  @media screen and (orientation: landscape) {
    flex-flow: row nowrap;
  }

  & .sheet {
    height: 50vh;
    z-index: 1;

    @media screen and (orientation: landscape) {
      height: 100vh;
      width: 50vw;
    }
  }

  & .keyboard {
    height: 50vh;
    z-index: 0;

    @media screen and (orientation: landscape) {
      height: 100vh;
      width: 50vw;
    }
  }
}
</style>
