import { useLangStore } from "~/stores/langStore";
import { watch } from "vue";

export default defineNuxtPlugin({
  name: "i18n-init",
  enforce: "post", // Выполняем после инициализации i18n
  setup(nuxtApp) {
    // Получаем хранилище Pinia
    const langStore = useLangStore();

    // Инициализируем язык из localStorage только на клиенте
    if (process.client) {
      // Инициализируем язык
      langStore.initLang();

      // Устанавливаем язык в i18n
      if (nuxtApp.$i18n) {
        nuxtApp.$i18n.locale.value = langStore.currentLang;

        // Следим за изменениями языка в i18n с помощью Vue watch
        const stopWatch = watch(
          () => nuxtApp.$i18n.locale.value,
          (newLocale) => {
            if (newLocale !== langStore.currentLang) {
              langStore.setLang(newLocale);
            }
          }
        );

        // Отписываемся при уничтожении приложения
        nuxtApp.hook("app:unmounted", () => {
          stopWatch && typeof stopWatch === "function" && stopWatch();
        });
      }

      // Следим за изменениями в хранилище
      langStore.$subscribe((mutation, state) => {
        if (nuxtApp.$i18n && state.currentLang !== nuxtApp.$i18n.locale.value) {
          nuxtApp.$i18n.locale.value = state.currentLang;
        }
      });
    } else {
      // На сервере просто устанавливаем язык по умолчанию
      if (nuxtApp.$i18n) {
        nuxtApp.$i18n.locale.value = langStore.currentLang;
      }
    }
  },
});
