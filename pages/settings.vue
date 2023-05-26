<template>
  <div>
    <div class="content">Settings</div>
    <Navigation />
  </div>
</template>

<script setup>
useServerSeoMeta({
  title: 'Piano Notes | Settings',
  ogTitle: 'Piano Notes | Settings',
  description: 'Change your settings.',
  ogDescription: 'Change your settings.',
  ogImage: '/images/titleImage.webp',
})
</script>

<style lang="scss" scoped>
.content {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
