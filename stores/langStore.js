import { defineStore } from "pinia";

// Функция для безопасного доступа к localStorage
const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return {
    getItem: () => null,
    setItem: () => null,
  };
};

export const useLangStore = defineStore("lang", {
  state: () => ({
    currentLang: "en",
    availableLangs: [
      { code: "ru", name: "RU" },
      { code: "en", name: "EN" },
      { code: "kz", name: "KZ" },
    ],
  }),

  actions: {
    setLang(lang) {
      if (lang === this.currentLang) return;

      // Устанавливаем новый язык в хранилище
      this.currentLang = lang;

      // Устанавливаем язык документа, если мы в браузере
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }

      // Сохраняем в localStorage, если он доступен
      const localStorage = getLocalStorage();
      localStorage.setItem("app-lang", lang);
    },

    initLang() {
      // Получаем localStorage, если он доступен
      const localStorage = getLocalStorage();
      const savedLang = localStorage.getItem("app-lang");

      if (
        savedLang &&
        this.availableLangs.some((lang) => lang.code === savedLang)
      ) {
        this.currentLang = savedLang;
      } else {
        this.currentLang = "en"; // Русский язык по умолчанию
      }

      // Устанавливаем язык документа, если мы в браузере
      if (typeof document !== "undefined") {
        document.documentElement.lang = this.currentLang;
      }
    },
  },
});
