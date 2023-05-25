// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, user-scalable=no',
            meta: [
                { name: 'application-name', content: 'Piano Notes'},

                /** Android */
                { name: 'theme-color', content: '#FBF7F5'},
                { name: 'mobile-web-app-capable', content: 'yes'},

                /** iOS */
                { name: 'apple-mobile-web-app-capable', content: 'yes'},
                { name: 'apple-mobile-web-app-title', content: 'Piano Notes'},

                /** Microsoft */
                { name: 'msapplication-tooltip', content: 'Learn Piano Notes'},
                { name: 'msapplication-starturl', content: '/'},
                { name: 'msapplication-tap-highlight', content: 'no'},

                /** UC Browser */
                { name: 'full-screen', content: 'yes'},
                { name: 'browser-mode', content: 'application'},
                { name: 'viewport', content: 'uc-fitscreen=yes'},
            ],
        },
    },
    css: [
        "normalize.css/normalize.css",
        "@/assets/styles/main.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "sass:math";
                    @import "@/assets/styles/_variables.scss";
                    `,
                },
            },
        },
    },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    piniaPersistedstate: {
        storage: 'localStorage',
    },
})
