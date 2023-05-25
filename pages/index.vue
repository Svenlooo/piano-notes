<template>
  <div class="index">
    <Piano />
    <Navigation />
  </div>
</template>

<style lang="scss" scoped>
.piano {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
