<template>
  <div class="toggle">
    <Icon :name="props.icon" />
    <label :for="props.id">{{ props.label }}</label>
    <input :id="props.id" type="checkbox" v-model="updateValue" />
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
    default: '',
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    }
});
</script>

<style lang="scss">
    .toggle {
        padding: 16px 8px;
        color: var(--color-white);
        background-color: var(--color-piano-black);
        border-top: solid var(--color-white) 1px;

        &:last-child {
            border-bottom: solid var(--color-white) 1px;
        }

        & .icon {
            width: 24px;
            height: auto;
            margin-right: 8px;
        }
    }
</style>
