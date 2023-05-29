import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    
    /** Add black key notes */
    const blackKeys = ref(false);

    /** Light, Dark or System */
    const screenMode = ref('light');

    /** Show only successes / hide failures */
    const successOnly = ref(false);
}, {
    persist: {
        paths: [
            'blackKeys',
            'screenMode',
            'successOnly'
        ]
    }
})