<template>
  <div class="index">
    <StatusBar />
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
  ogImage: 'https://piano-notes.netlify.app/images/titleImage.jpg',
})
</script>

<style lang="scss" scoped>
.piano {
  position: relative;
  height: calc(100dvh - #{$statusBarHeight} - #{$navigationHeight});
  box-shadow: 0px 3px 7px -4px rgba(0,0,0,0.75);
}
</style>
