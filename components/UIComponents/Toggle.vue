<template>
  <div class="toggle">
    <input
      :id="props.id"
      class="toggle__checkbox"
      type="checkbox"
      v-model="updateValue"
    />
    <label class="toggle__track" :for="props.id"></label>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss">
.toggle {
  --toggle-width: 50px;
  --toggle-height: 30px;
  --toggle-track-padding: 2px;

  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);

  &__checkbox {
    position: absolute;
    opacity: 0;
  }

  &__track {
    display: block;
    width: inherit;
    height: inherit;
    padding: var(--toggle-track-padding);
    border-radius: calc(var(--toggle-width) / 2);
    background-color: var(--color-light2);
    transition: all 200ms;

    // Switch
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      height: calc(100% - var(--toggle-track-padding) * 2);
      box-sizing: border-box;
      border-radius: 50%;
      aspect-ratio: 1/1;
      background-color: var(--color-white);
      transform: translateX(var(--toggle-track-padding));
      transition: all 200ms;
    }
  }

  // Active styles
  & input:checked ~ .toggle__track {
    background-color: var(--color-green);

    &::after {
      transform: translateX(calc(var(--toggle-width) - var(--toggle-height)));
    }
  }
}
</style>
