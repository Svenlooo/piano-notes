<template>
  <div>
    <main>
      <h1>Past Games</h1>
      <HighscoreList />
    </main>
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: "Piano Notes | Past games",
  ogTitle: "Piano Notes | Past games",
  twitterTitle: "Piano Notes | Past games",
  description: "View your past games and see your rate of improvement.",
  ogDescription: "View your past games and see your rate of improvement.",
  twitterDescription: "View your past games and see your rate of improvement.",
  ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
  twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
});
</script>

<style lang="scss" scoped>
main {
  overflow-y: auto;
  padding: var(--content-padding);
}
</style>
