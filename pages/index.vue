<template>
  <div class="index">
    <Piano />
    <Navigation />
  </div>
</template>

<script setup>
useHead({
  title: 'Piano Notes'
})
</script>

<style lang="scss" scoped>
.piano {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
