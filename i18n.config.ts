import en from './lang/en-US';
import de from './lang/de-DE';

export default defineI18nConfig(() => ({
    legacy: false,
    locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English'
        },
        {
          code: 'de',
          iso: 'de-DE',
          name: 'Deutsch'
        },
    ],
    lazy: false,
    defaultLocale: 'en',
    fallbackLocale: 'en',
    missingWarn: false,
    messages: {
        en: en,
        de: de,
    },
    detectBrowserLanguage: {
        useCookie: false,
        redirectOn: 'root',
    },
}))
