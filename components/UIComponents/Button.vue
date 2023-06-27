<template>
  <button
    class="button"
    :class="props.active && 'button--active'"
    @click="handleClick"
  >
    <Icon
      :name="props.icon"
      v-if="props.icon.length > 0"
      class="button__icon"
    />
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<style lang="scss">
.button {
  border: none;
  background-color: var(--color-light);
  color: var(--color-piano-black);
  border-radius: 8px;
  padding: 11px 16px 10px;
  cursor: pointer;

  @include buttonAnimation;

  &__icon {
    margin-right: 8px;
  }

  &--active {
    font-weight: bold;

    & .button__icon {
        color: var(--color-green);
        transition: all 100ms;
        transform: scale(3);
        margin-right: 16px;
    }
  }
}
</style>
