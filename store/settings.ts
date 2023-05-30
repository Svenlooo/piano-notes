import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    
    /** Add black key notes */
    const blackKeys = ref(false);

    /** Show only successes / hide failures */
    const successOnly = ref(false);

    /** Adjust theme according to user's system settings */
    const theme = ref(process.client && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    /** Toggle the theme */
    const setTheme = (mode: string) => {
        theme.value = mode;
    }

    return {
        theme,
        setTheme
    }
}, {
    persist: {
        paths: [
            'blackKeys',
            'theme',
            'successOnly'
        ]
    }
})