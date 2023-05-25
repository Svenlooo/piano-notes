<template>
  <div>
    <div class="content">Highscore</div>
    <Navigation />
  </div>
</template>

<script setup>
useHead({
  title: 'Piano Notes | Past games'
})
</script>

<style lang="scss" scoped>
.content {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
