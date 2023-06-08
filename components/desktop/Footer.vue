<template>
    <div class="footer">
       {{ props.text }} 
    </div>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    });
</script>

<style lang="scss">
    .footer {
        text-align: center;
    }
</style>
