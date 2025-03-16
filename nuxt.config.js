export default defineNuxtConfig({
  compatibilityDate: "2025-03-13",
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],

  i18n: {
    lazy: false,
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    detectBrowserLanguage: false,
    langDir: "locales/",
    locales: [
      {
        code: "ru",
        name: "RU",
        file: "ru.js",
      },
      {
        code: "en",
        name: "EN",
        file: "en.js",
      },
      {
        code: "kz",
        name: "KZ",
        file: "kz.js",
      },
    ],
  },

  imports: {
    dirs: ["stores"],
  },

  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
});
