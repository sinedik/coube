import { createI18n } from "vue-i18n";

// Получаем сохраненный язык из localStorage или используем русский по умолчанию
const savedLang = localStorage.getItem("app-lang") || "ru";

// Сообщения для локализации
const messages = {
  ru: {
    common: {
      home: "Главная",
      client: "Заказчик",
      carrier: "Перевозчик",
      about: "О нас",
      news: "Новости",
      login: "Войти",
    },
  },
  en: {
    common: {
      home: "Home",
      client: "Client",
      carrier: "Carrier",
      about: "About",
      news: "News",
      login: "Login",
    },
  },
  kz: {
    common: {
      home: "Басты бет",
      client: "Тапсырыс беруші",
      carrier: "Тасымалдаушы",
      about: "Біз туралы",
      news: "Жаңалықтар",
      login: "Кіру",
    },
  },
};

// Создаем экземпляр i18n
const i18n = createI18n({
  legacy: false, // Используем Composition API
  globalInjection: true, // Добавляет $t, $tc, и т.д. в шаблоны
  locale: savedLang, // Используем сохраненный язык
  fallbackLocale: "ru",
  messages,
});

export default i18n;
