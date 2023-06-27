import { defineStore } from 'pinia';
import { Theme } from '~/interfaces/Theme';

export const useSettingsStore = defineStore('settings', () => {
    
    /** Add black key notes */
    const blackKeys = ref<boolean>(true);

    /** Show only successes / hide failures */
    const successOnly = ref<boolean>(false);

    /** Adjust theme according to user's system settings */
    const theme = ref<Theme>(process.client 
        && window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light');

    /**
     * Toggle the theme
     * @param {boolean} darkMode
     */
    const setTheme = (darkMode: boolean) => {
        theme.value = darkMode ? 'dark' : 'light';
    }

    return {
        blackKeys,
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
