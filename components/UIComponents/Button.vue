<template>
  <button class="button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<style lang="scss">
.button {
  border: none;
  background-color: var(--color-light);
  border-radius: 8px;
  padding: 11px 16px 10px;
  cursor: pointer;

  @include buttonAnimation;
}
</style>
