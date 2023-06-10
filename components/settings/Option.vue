<template>
  <label class="settingsOption" :for="props.id">
    <Icon :name="props.icon" />
    <div class="settingsOption__label">
      <span class="settingsOption__label-inner">{{ props.label }}</span>
    </div>
    <slot></slot>
  </label>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
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
  cursor: pointer;

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
    display: flex;
    align-items: center;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
    user-select: none;
  }
}
</style>