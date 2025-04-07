// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "ru", iso: "ru-RU", file: "ru.json" },
      { code: "kk", iso: "kk-KZ", file: "kk.json" },
      { code: "en", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {
      lcp: {
        modifiers: {
          format: "webp",
          quality: 90,
          loading: "eager",
        },
      },
      avatar: {
        modifiers: {
          format: "webp",
          width: 50,
          height: 50,
        },
      },
    },
    densities: [1, 2],
    performance: {
      lazyLoad: true,
      preload: true,
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    routeRules: {
      "/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/images/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/fonts/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/api/**": {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      },
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimize: true,
    minimizer: ["...", "terser"],
    removeAvailableModules: true,
    removeEmptyChunks: true,
    runtimeChunk: "single",
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === "production",
          drop_debugger: process.env.NODE_ENV === "production",
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router", "vue-i18n"],
            style: ["~/assets/css/main.css"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["vue", "vue-router"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/variables.scss";',
        },
      },
    },
  },
  routeRules: {
    "/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
    "/images/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
    "/fonts/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#f19e22" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "canonical", href: "https://coube.kz<%route.fullPath%>" },
        {
          rel: "preload",
          href: "/fonts/inter.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com",
          as: "font",
          crossorigin: "",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/no-layout-shifts.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            minifyFontValues: { removeQuotes: false },
          },
        ],
      },
    },
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
    componentIslands: true,
    treeshakeClientOnly: true,
  },
});
