<template>
    <div class="gameDetailPage">
        Game Ho!
    </div>
</template>

<script setup>
    const props = defineProps({
        index: {
            type: Number,
            required: true,
        },
        game: {
            required: true,
        }
    });
</script>
