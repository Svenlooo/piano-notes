<template>
  <div class="settingsOption">
    <Icon :name="props.icon" />
    <label class="settingsOption__label" :for="props.id">{{
      props.label
    }}</label>
    <UIComponentsToggle :id="props.id" v-model="updateValue" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
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
.settingsOption {
  display: flex;
  flex-flow: row nowrap;
  padding: 18px 14px;
  margin-bottom: 12px;
  color: var(--color-white);
  background-color: var(--color-piano-black);
  border-radius: var(--border-radius-sm);

  &:last-child {
    border-bottom: solid var(--color-white) 1px;
  }

  & .icon {
    width: 24px;
    height: auto;
    margin-right: 8px;
  }

  &__label {
    flex: 1;
  }
}
</style>
