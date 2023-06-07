<template>
  <div>
    <StatusBar />
    <main>
      <Piano />
    </main>
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: "Piano Notes",
  ogTitle: "Piano Notes",
  twitterTitle: "Piano Notes",
  description: "Learn how to read piano notes in a fun and simple way!",
  ogDescription: "Learn how to read piano notes in a fun and simple way!",
  twitterDescription: "Learn how to read piano notes in a fun and simple way!",
  ogImage: "https://piano-notes.netlify.app/images/titleImage.jpg",
  twitterImage: 'https://piano-notes.netlify.app/images/titleImage.jpg',
});
</script>

<style lang="scss" scoped>
.piano {
  position: relative;
  box-shadow: 0px 3px 7px -4px rgba(0, 0, 0, 0.75);
}

.statusBar {
  position: absolute;
  width: 100%;
  top: 12px;
  z-index: 1;

  @media #{map-get($mediaSituations, 'landscape')} {
    width: 47%;
  }

  @media #{map-get($mediaSituations, 'fills-screen')} {
    top: 8px;
  }
}
</style>
