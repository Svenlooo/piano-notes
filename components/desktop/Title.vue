<template>
  <div class="title">
    <h1 class="title__heading">{{ props.title }}</h1>
    <span class="title__subline" v-if="props.subline">{{ props.subline }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subline: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss">
.title {
  text-align: center;

  &__heading {
    font-family: $serifFont;
    font-size: 80px;
    color: var(--color-piano-black);
    margin: 0;
    opacity: 1;
    transition: all 600ms;
  }
  &__subline {
    opacity: 1;
    transition: all 400ms 300ms;
  }
}
</style>
