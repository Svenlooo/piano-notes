import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    
    /** Add black key notes */
    const blackKeys = ref<boolean>(false);

    /** Show only successes / hide failures */
    const successOnly = ref<boolean>(false);

    /** Get the successOnly value from localstorage, if set */
    const setInitialSuccessOnly = () => {
        if (process.client) {
            const ls = window.localStorage.getItem('settings');
            console.log('ls', ls);
            if (ls !== null) {
                successOnly.value = JSON.parse(ls).successOnly;
            } else {
                successOnly.value = false;
            }
        }
    }

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
        setInitialSuccessOnly,
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