<script setup>
const { locale } = useI18n();
</script>

<template>
  <div>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="de">de</option>
    </select>
  </div>
</template>
