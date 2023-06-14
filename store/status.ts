import { defineStore } from 'pinia';

export const useStatusStore = defineStore('status', () => {

    /** App's resources are being loaded (client-side) */
    const appResourcesLoading = ref<boolean>(true);

    /** Loading screen is in the process of being animated out */
    const loadingScreenAnimationInProgress = ref<boolean>(false);

    /** Animation of loading screen is done */
    const loadingScreenAnimationComplete = ref<boolean>(false);

    return {
        appResourcesLoading,
        loadingScreenAnimationInProgress,
        loadingScreenAnimationComplete,
    }
});
