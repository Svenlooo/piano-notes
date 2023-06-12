// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
            meta: [
                { name: 'application-name', content: 'Piano Notes'},
                { name: 'theme-color', content: '#FBF7F5'},

                /** Android */
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
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico'},
                { rel: 'apple-touch-icon', href: '/images/pwa-icons/apple-touch-icon.png', sizes: '180x180'},
                { rel: 'mask-icon', href: '/images/pwa-icons/apple-touch-icon.png', sizes: '180x180'}
            ]
        },
    },
    css: [
        'normalize.css/normalize.css',
        '@/assets/styles/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use 'sass:math';
                    @import '@/assets/styles/_fonts.scss';
                    @import '@/assets/styles/_variables.scss';
                    `,
                },
            },
        },
    },
    modules: [
        '@vite-pwa/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    pwa: {
        manifest: {
            name: 'Piano Notes',
            short_name: 'Piano Notes',
            description: 'Learn how to read piano notes in a fun and simple way!',
            start_url: '/',
            display: 'standalone',
            scope: '/',
            icons: [
                {
                    'src': '/images/pwa-icons/android-chrome-192x192.png',
                    'sizes': '192x192',
                    'type': 'image/png'
                },
                {
                    'src': '/images/pwa-icons/android-chrome-512x512.png',
                    'sizes': '512x512',
                    'type': 'image/png'
                }
            ],
        },
        workbox: {
            globPatterns: ['**/*.{js,css}'],
            navigateFallback: null,
            runtimeCaching: [
                {
                    urlPattern: /^https?.*/,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'all-resources',
                        expiration: {
                            maxEntries: 100,
                            maxAgeSeconds: 86400, // 24 hours
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        },
        devOptions: {
            enabled: true,
            type: 'module',
        },
        client: {
            installPrompt: false,
        },
    },
    piniaPersistedstate: {
        storage: 'localStorage',
    },
})
