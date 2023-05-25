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
  position: relative;
  height: calc(100dvh - #{$navigationHeight});
  box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
}
</style>
