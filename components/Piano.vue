<template>
  <div class="piano">
    <Sheet class="piano__sheet" />
    <Keyboard class="piano__keyboard" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.piano {
  display: flex;
  flex-flow: column nowrap;

  @media screen and (orientation: landscape) {
    flex-flow: row nowrap;
  }

  &__sheet {
    height: 50vh;
    z-index: 1;

    @media screen and (orientation: landscape) {
      height: 100vh;
      width: 50vw;
    }
  }

  &__keyboard {
    height: 50vh;
    z-index: 0;

    @media screen and (orientation: landscape) {
      height: 100vh;
      width: 50vw;
    }
  }
}
</style>
