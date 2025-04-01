import { useLangStore } from "~/stores/langStore";
import { watch, nextTick } from "vue";

export default defineNuxtPlugin({
  name: "i18n-init",
  enforce: "post", // Выполняем после инициализации i18n
  async setup(nuxtApp) {
    if (!nuxtApp.$i18n) {
      console.error("i18n не инициализирован в плагине i18n-init");
      return;
    }

    // Получаем хранилище Pinia
    const langStore = useLangStore();

    // Для отладки
    if (process.client && typeof window !== "undefined") {
      window.$i18n = nuxtApp.$i18n;
    }

    // Функция для синхронизации языка
    const syncLanguage = async (newLang) => {
      try {
        console.log(`syncLanguage: Установка языка ${newLang}`);

        // Устанавливаем язык в i18n
        await nuxtApp.$i18n.setLocale(newLang);

        // Ждем применения изменений
        await nextTick();
        await nextTick(); // Второй nextTick для гарантии

        console.log(`Язык успешно изменен на ${newLang}`);
      } catch (error) {
        console.error("Ошибка при смене языка:", error);
      }
    };

    // Инициализируем на клиенте
    if (process.client) {
      // Загружаем язык из localStorage через хранилище
      langStore.initLang();
      console.log(`Начальный язык из хранилища: ${langStore.currentLang}`);

      // Синхронизируем i18n с langStore при инициализации
      await syncLanguage(langStore.currentLang);

      // Подписываемся на изменения в хранилище
      const unsubscribe = langStore.$subscribe(async (mutation, state) => {
        // Проверяем, отличается ли язык в i18n от языка в хранилище
        if (nuxtApp.$i18n.locale.value !== state.currentLang) {
          console.log(
            `Синхронизация из хранилища в i18n: ${state.currentLang}`
          );
          await syncLanguage(state.currentLang);
        }
      });

      // Подписываемся на изменения в i18n
      const stopWatch = watch(nuxtApp.$i18n.locale, async (newLocale) => {
        if (newLocale !== langStore.currentLang) {
          console.log(`Синхронизация из i18n в хранилище: ${newLocale}`);
          langStore.setLang(newLocale);
        }
      });

      // Отписываемся при размонтировании
      nuxtApp.hook("app:unmounted", () => {
        unsubscribe();
        stopWatch();
      });
    }
  },
});
