import { defineStore } from 'pinia';

export const useStatusStore = defineStore('status', () => {

    const loading = ref<boolean>(true);

    return {
        loading
    }
});