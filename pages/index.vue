<template>
  <div class="index">
    <Sheet class="sheet" />
    <Keyboard class="keyboard" />
  </div>
</template>

<style lang="scss" scoped>
.index {
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
