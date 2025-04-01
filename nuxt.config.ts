// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    "/": {
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24, // 24 часа
      },
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.js",
        name: "Русский",
      },
      {
        code: "en",
        file: "en.js",
        name: "English",
      },
      {
        code: "kz",
        file: "kz.js",
        name: "Қазақша",
      },
    ],
    defaultLocale: "ru",
    strategy: "no_prefix",
    lazy: false,
    langDir: "i18n/locales",
    vueI18n: "./i18n/i18n.config.ts",
    detectBrowserLanguage: false,
  },
  vite: {
    assetsInclude: ["**/*.mp4"],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "video-player": ["@vueuse/core"],
          },
        },
      },
    },
  },
});
