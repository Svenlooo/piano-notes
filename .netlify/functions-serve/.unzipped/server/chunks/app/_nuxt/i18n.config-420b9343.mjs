const en = {
  title: "Piano Notes",
  subline: "by Sven Lochner"
};
const de = {
  title: "Noten lernen",
  subline: "von Sven Lochner"
};
const i18n_config = () => ({
  legacy: false,
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English"
    },
    {
      code: "de",
      iso: "de-DE",
      name: "Deutsch"
    }
  ],
  lazy: false,
  defaultLocale: "en",
  fallbackLocale: "en",
  missingWarn: false,
  messages: {
    en,
    de
  },
  detectBrowserLanguage: {
    useCookie: false,
    redirectOn: "root"
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-420b9343.mjs.map
