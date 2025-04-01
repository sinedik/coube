import ru from "./locales/ru.js";
import en from "./locales/en.js";
import kz from "./locales/kz.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
  silentTranslationWarn: false,
  sync: true,
  missingWarn: true,
  skipSettingLocaleOnNavigate: false,
  globalInjection: true,
  compositionOnly: false,
  availableLocales: ["ru", "en", "kz"],
  messages: {
    ru,
    en,
    kz,
  },
}));
