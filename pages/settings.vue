<template>
  <div>
    <div class="content">Settings</div>
    <Navigation />
  </div>
</template>

<script setup>
useHead({
  title: 'Piano Notes | Settings'
})
</script>

<style lang="scss" scoped>
.content {
  height: calc(100dvh - #{$navigationHeight});
}
</style>
