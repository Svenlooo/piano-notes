export default defineI18nConfig(() => ({
    locales: ['en','de'],
    defaultLocale: 'en',
    langDir: 'lang',
    messages: {
        en: {
            title: 'Piano Notes',
            subline: 'by Sven Lochner',
        },
        de: {
            title: 'Noten lernen',
            subline: 'von Sven Lochner',
        },
    },
}))
