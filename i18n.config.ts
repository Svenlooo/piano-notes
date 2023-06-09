export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en', 'de'],
    defaultLocale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            DesktopTitle: {
                title: 'Piano Notes',
                subline: 'by Sven Lochner'
            }
        },
        de: {
            DesktopTitle: {
                title: 'Noten lernen',
                subline: 'von Sven Lochner'
            }
        }
    }
}))
