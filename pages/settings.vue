<template>
  <div>
    <main>
      <ul>
        <li>Dark mode toggle</li>
        <li>Black keys toggle</li>
        <li>Toggle failure display</li>
      </ul>
    </main>
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: "Piano Notes | Settings",
  ogTitle: "Piano Notes | Settings",
  twitterTitle: "Piano Notes | Settings",
  description: "Change your settings.",
  ogDescription: "Change your settings.",
  twitterDescription: "Change your settings.",
  ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
  twitterImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
});
</script>

<style lang="scss" scoped>
main {
  padding: var(--content-padding);
}
</style>
