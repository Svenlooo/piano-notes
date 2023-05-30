import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    
    /** Add black key notes */
    const blackKeys = ref<boolean>(false);

    /** Show only successes / hide failures */
    const successOnly = ref<boolean>(false);

    /** Adjust theme according to user's system settings */
    const theme = ref<string>(process.client && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    /**
     * Toggle the theme
     * @param {string} mode
     */
    const setTheme = (mode: string) => {
        theme.value = mode;
    }

    return {
        successOnly,
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