// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
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
