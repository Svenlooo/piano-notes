<template>
  <div class="switch">
    <select v-model="locale">
      <option value="en" selected="selected">en</option>
      <option value="de">de</option>
    </select>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
