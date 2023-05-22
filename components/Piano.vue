<template>
  <div class="piano">
    <Sheet ref="sheet" />
    <Keyboard @play="handleNote($event)" />
  </div>
</template>

<script setup>
const sheet = ref();

/**
 * Distribute information about the played note.
 * @param {string} note
 */
const handleNote = (note) => {
  console.log("Played: ", note);
  sheet.value.checkNote(note);
};
</script>

<style lang="scss">
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
