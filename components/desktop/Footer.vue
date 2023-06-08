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
        position: absolute;
        bottom: 0px;
        text-align: center;
    }
</style>
