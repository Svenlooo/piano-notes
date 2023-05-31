<template>
  <div class="accidental">
    <Icon v-if="scale == 'b'" name="mdi:music-accidental-flat" />
    <Icon v-if="scale == '#'" name="mdi:music-accidental-sharp" />
  </div>
</template>

<script setup>
const props = defineProps({
  scale: {
    type: String,
    default: "",
    validator: (value) => {
      return ["", "#", "b"].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
    .icon {
        width: 36px;
        height: auto;
    }
</style>
