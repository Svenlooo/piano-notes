// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
})
