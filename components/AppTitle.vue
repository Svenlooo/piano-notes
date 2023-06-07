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
            required: true
        },
        subline: {
            type: String,
            required: false,
        }
    });
</script>

<style lang="scss">
.title {
  position: absolute;
  top: 32px;
  text-align: center;

  @media #{map-get($mediaSituations, 'fills-screen')} {
    display: none;
  }

  &__heading {
    font-family: $serifFont;
    font-size: 80px;
    color: var(--color-piano-black);
    margin: 0;
  }
}
</style>
