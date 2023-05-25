<template>
  <div class="index">
    <Piano />
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: 'Piano Notes',
  ogTitle: 'Piano Notes',
  description: 'Learn how to read piano notes in a fun and simple way!',
  ogDescription: 'Learn how to read piano notes in a fun and simple way!',
  ogImage: 'assets/images/titleImage.webp',
})
</script>

<style lang="scss" scoped>
.piano {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
