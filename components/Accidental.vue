<template>
  <div class="accidental">
    <Icon v-if="scale == 'flat'" name="mdi:music-accidental-flat" />
    <Icon v-if="scale == 'sharp'" name="mdi:music-accidental-sharp" />
  </div>
</template>

<script setup>
const props = defineProps({
  scale: {
    type: String,
    default: "",
    validator: (value) => {
      return ["", "sharp", "flat"].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
    .icon {
        width: 28px;
        height: auto;
    }
</style>
