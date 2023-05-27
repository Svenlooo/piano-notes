<template>
  <div>
    <div class="content">Highscore</div>
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: 'Piano Notes | Past games',
  ogTitle: 'Piano Notes | Past games',
  twitterTitle: 'Piano Notes | Past games',
  description: 'View your past games and see your rate of improvement.',
  ogDescription: 'View your past games and see your rate of improvement.',
  twitterDescription: 'View your past games and see your rate of improvement.',
  ogImage: 'https://piano-notes.netlify.app/images/titleImage.jpg',
  twitterImage: 'https://piano-notes.netlify.app/images/titleImage.jpg',
})
</script>

<style lang="scss" scoped>
.content {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
