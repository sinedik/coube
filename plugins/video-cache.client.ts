import { defineNuxtPlugin } from "#app";

const VIDEO_CACHE_KEY = "video-cache-v1";

export default defineNuxtPlugin(() => {
  const cache = new Map<string, string>();

  // Загружаем кэш из localStorage при инициализации
  if (process.client) {
    try {
      const savedCache = localStorage.getItem(VIDEO_CACHE_KEY);
      if (savedCache) {
        const parsed = JSON.parse(savedCache);
        Object.entries(parsed).forEach(([key, value]) => {
          cache.set(key, value as string);
        });
      }
    } catch (error) {
      console.error("Error loading video cache:", error);
    }
  }

  return {
    provide: {
      videoCache: {
        async get(url: string): Promise<string | null> {
          return cache.get(url) || null;
        },

        async set(url: string, blob: Blob): Promise<string> {
          const objectUrl = URL.createObjectURL(blob);
          cache.set(url, objectUrl);

          // Сохраняем кэш в localStorage
          if (process.client) {
            try {
              const cacheObject = Object.fromEntries(cache.entries());
              localStorage.setItem(
                VIDEO_CACHE_KEY,
                JSON.stringify(cacheObject)
              );
            } catch (error) {
              console.error("Error saving video cache:", error);
            }
          }

          return objectUrl;
        },

        clear() {
          cache.forEach((url) => URL.revokeObjectURL(url));
          cache.clear();
          if (process.client) {
            localStorage.removeItem(VIDEO_CACHE_KEY);
          }
        },
      },
    },
  };
});
