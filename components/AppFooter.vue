<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__left">
        <!-- Логотип и платформа -->
        <div class="footer__logo-container">
          <div class="footer__logo-wrapper">
            <NuxtLinkLocale to="/">
              <img
                src="~/assets/logo.svg"
                :alt="t('footer.logo.alt')"
                class="footer__logo"
              />
            </NuxtLinkLocale>
            <span class="footer__platform">{{
              t("footer.logo.platform")
            }}</span>
          </div>
        </div>

        <!-- Блок Astana Hub -->
        <div class="footer__astana-hub">
          <img
            src="~/assets/astana-hub.png"
            :alt="t('footer.astanaHub.alt')"
            class="footer__astana-hub-logo"
          />
          <span class="footer__certificate">{{
            t("footer.astanaHub.certificate")
          }}</span>
        </div>

        <!-- Копирайт -->
        <div class="footer__copyright">{{ t("footer.copyright") }}</div>
      </div>

      <div class="footer__nav">
        <NuxtLinkLocale
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="footer__nav-link"
          :class="{ active: item.active }"
        >
          {{ item.text }}
        </NuxtLinkLocale>
        <div class="footer__lang">
          <select v-model="selectedLang" @change="switchLocale(selectedLang)">
            <option
              v-for="lang in availableLocales"
              :key="lang.code"
              :value="lang.code"
            >
              {{ lang.name }}
            </option>
          </select>
          <span class="footer__lang-arrow"></span>
        </div>
      </div>

      <div class="footer__contacts">
        <a :href="`tel:${contacts.phone.raw}`" class="footer__contact-link">
          <img
            src="~/assets/phone.svg"
            :alt="t('footer.contacts.phone')"
            class="footer__contact-icon"
          />
          <span>{{ contacts.phone.display }}</span>
        </a>
        <a
          :href="contacts.social.whatsapp.direct"
          class="footer__contact-link"
          target="_blank"
        >
          <img
            src="~/assets/whatsapp.svg"
            :alt="t('footer.contacts.whatsapp')"
            class="footer__contact-icon"
          />
          <span>WhatsApp</span>
        </a>
        <a
          :href="contacts.social.telegram.contact"
          class="footer__contact-link"
          target="_blank"
        >
          <img
            src="~/assets/telegram.svg"
            :alt="t('footer.contacts.telegram')"
            class="footer__contact-icon"
          />
          <span>Telegram</span>
        </a>
        <a
          :href="`mailto:${contacts.email.office}`"
          class="footer__contact-link"
        >
          <img
            src="~/assets/mail.svg"
            :alt="t('footer.contacts.email')"
            class="footer__contact-icon"
          />
          <span>{{ contacts.email.office }}</span>
        </a>
        <a
          :href="contacts.social.instagram"
          class="footer__contact-link"
          target="_blank"
        >
          <img
            src="~/assets/instagram.svg"
            :alt="t('footer.contacts.instagram')"
            class="footer__contact-icon"
          />
          <span>coube.kz</span>
        </a>
      </div>

      <div class="footer__right">
        <div class="footer__docs">
          <a href="#" class="footer__doc-link">{{
            t("footer.docs.userAgreement")
          }}</a>
          <a href="#" class="footer__doc-link">{{
            t("footer.docs.privacyPolicy")
          }}</a>
          <p class="footer__app-title">{{ t("footer.docs.watchPlatform") }}</p>
          <a :href="contacts.social.youtube" target="_blank">
            <img
              src="~/assets/movie.svg"
              :alt="t('footer.docs.video')"
              class="footer__movie-icon"
            />
          </a>
        </div>

        <div class="footer__app-container">
          <p class="footer__app-title">{{ t("footer.app.downloadDriver") }}</p>
          <div class="footer__app-buttons">
            <a href="#" class="footer__app-button">
              <img src="~/assets/Apple.svg" :alt="t('footer.app.appStore')" />
            </a>
            <a href="#" class="footer__app-button">
              <img
                src="~/assets/Google.svg"
                :alt="t('footer.app.googlePlay')"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <button
      class="scroll-to-top"
      @click="scrollToTop"
      :aria-label="t('footer.scrollToTop')"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14L12 9L17 14"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { useContactsStore } from "../stores/contactsStore";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import { useNuxtApp } from "#app";
import { useCookieLocale } from "#i18n";
import { useLocalePath, useSwitchLocalePath } from "#i18n";

// Получаем экземпляр Nuxt
const nuxtApp = useNuxtApp();

// Маршрутизатор
const route = useRoute();
const router = useRouter();

// Хранилища Pinia
const contacts = useContactsStore();

// i18n
const { t, locale, setLocale, locales } = useI18n();
const cookieLocale = useCookieLocale();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

// Реактивные переменные
const selectedLang = ref(locale.value);

// Вычисляем текущий путь для определения активной ссылки
const currentPath = computed(() => route.path);

// Данные меню с правильными путями
const menuItems = computed(() => [
  {
    text: t("common.home"),
    link: localePath("/"),
    active: currentPath.value === localePath("/"),
  },
  {
    text: t("common.client"),
    link: localePath("/customer"),
    active: currentPath.value === localePath("/customer"),
  },
  {
    text: t("common.carrier"),
    link: localePath("/driver"),
    active: currentPath.value === localePath("/driver"),
  },
  {
    text: t("common.about"),
    link: localePath("/about"),
    active: currentPath.value === localePath("/about"),
  },
  // { text: t('common.news'), link: localePath('/news'), active: currentPath.value === localePath('/news') },
]);

// Вычисляем доступные языки
const availableLocales = computed(() => {
  return locales.value.map((locale) => ({
    code: locale.code,
    name: locale.code.toUpperCase(),
  }));
});

// Метод для переключения языка (такой же, как в хедере)
const switchLocale = async (newLocale) => {
  try {
    if (newLocale === locale.value) return;

    console.log(`Переключение языка на ${newLocale}`, {
      current: locale.value,
    });

    // Получаем новый путь для текущей страницы с новой локалью
    const redirectPath = switchLocalePath(newLocale);

    // Устанавливаем cookie для языка
    cookieLocale.value = newLocale;

    // Устанавливаем новую локаль
    await setLocale(newLocale);

    // Перенаправляем пользователя на тот же маршрут, но с новой локалью
    if (redirectPath) {
      await router.push(redirectPath);
    }

    // Обновляем интерфейс после смены языка
    await nextTick();

    console.log(
      `Язык после переключения: ${locale.value}, cookie: ${cookieLocale.value}, путь: ${route.path}`
    );
  } catch (error) {
    console.error("Ошибка при смене языка:", error);
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Функция для перемещения копирайта
const moveCopyright = () => {
  const copyright = document.querySelector(".footer__copyright");
  const appContainer = document.querySelector(".footer__app-container");

  if (window.innerWidth <= 991) {
    if (copyright && appContainer) {
      appContainer.after(copyright);
    }
  } else {
    if (copyright) {
      const leftSection = document.querySelector(".footer__left");
      if (leftSection) {
        leftSection.appendChild(copyright);
      }
    }
  }
};

// Следим за изменениями языка в i18n
watch(
  () => locale.value,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

// Хуки жизненного цикла
onMounted(() => {
  moveCopyright();
  window.addEventListener("resize", moveCopyright);

  // Устанавливаем начальное значение для селектора
  selectedLang.value = locale.value;
});

onUnmounted(() => {
  window.removeEventListener("resize", moveCopyright);
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "~/assets/scss/variables" as *;

.footer {
  background-color: $dark-bg;
  color: $white;
  padding: 30px 0;
  width: 100%;
  position: relative;
  border-radius: 24px;
  margin-bottom: 0;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__logo-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__logo {
    width: 153px;
    height: 55px;
    object-fit: contain;
  }

  &__platform {
    font-size: 24px;
    color: $white;
    white-space: nowrap;
  }

  &__astana-hub {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    &-logo {
      height: 40px;
      width: auto;
      object-fit: contain;
    }
  }

  &__certificate {
    color: $white;
    font-size: 16px;
  }

  &__copyright {
    font-size: 16px;
    color: $white;
    margin-top: auto;
  }

  &__nav {
    display: flex;
    flex-direction: column;

    &-link {
      color: $white;
      text-decoration: none;
      margin-bottom: 15px;
      font-size: 16px;

      &:hover {
        color: $primary-color;
      }

      &.active {
        color: $primary-color;
      }
    }
  }

  &__lang {
    position: relative;
    margin-top: 10px;

    select {
      appearance: none;
      background-color: transparent;
      border: none;
      color: $white;
      font-size: 16px;
      padding-right: 20px; /* Уменьшаем отступ для стрелки */
      cursor: pointer;

      &:focus {
        outline: none;
      }

      option {
        background-color: $dark-bg;
        color: $white;
      }
    }

    &-arrow {
      position: static; /* Убираем абсолютное позиционирование */
      content: "";
      right: 40px; /* Подвигаем стрелку ближе к селекту */
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid $primary-color; /* Желтая стрелка */
      pointer-events: none;
      display: inline-block; /* Добавляем для корректного отображения */
      margin-left: -10px; /* Корректируем положение */
      vertical-align: middle; /* Выравниваем вертикально */
    }
  }

  @media (max-width: 768px) {
    &__lang {
      position: relative;
      margin-top: 10px;

      select {
        appearance: none;
        background-color: transparent;
        border: none;
        color: $white;
        font-size: 16px;
        padding-right: 20px; /* Уменьшаем отступ для стрелки */
        cursor: pointer;

        &:focus {
          outline: none;
        }

        option {
          background-color: $dark-bg;
          color: $white;
        }
      }

      &-arrow {
        position: static; /* Убираем абсолютное позиционирование */
        content: "";
        right: 40px; /* Подвигаем стрелку ближе к селекту */
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 8px solid $primary-color; /* Желтая стрелка */
        pointer-events: none;
        display: inline-block; /* Добавляем для корректного отображения */
        margin-left: -10px; /* Корректируем положение */
        vertical-align: middle; /* Выравниваем вертикально */
      }
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
  }

  &__contact {
    &-link {
      display: flex;
      align-items: center;
      color: $white;
      text-decoration: none;
      margin-bottom: 15px;

      &:hover {
        color: $primary-color;
      }
    }

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      object-fit: contain;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
  }

  &__docs {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__doc-link {
    color: #4a90e2;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }

  &__movie-link {
    display: block;
    margin-top: 10px;
  }

  &__movie-icon {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  &__app {
    &-container {
      margin-top: 20px;
    }

    &-title {
      font-size: 16px;
      margin-bottom: 10px;
      color: $white;
    }

    &-buttons {
      display: flex;
      gap: 10px;
    }

    &-button {
      img {
        height: 40px;
        width: auto;
      }
    }
  }

  .scroll-to-top {
    position: absolute;
    top: -24px; /* Смещаем кнопку вверх, чтобы она наполовину выходила за футер */
    right: 30px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: $primary-color;
    color: $white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: color.adjust($primary-color, $lightness: -10%);
    }
  }

  @media (max-width: 991px) {
    margin: 0;
    width: 100%;
    padding: 30px 20px;

    .container {
      padding: 0;
    }

    &__left,
    &__nav,
    &__contacts,
    &__right {
      width: 100%;
      margin-bottom: 30px;
    }

    &__logo-wrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    &__platform {
      font-size: 20px;
    }

    &__astana-hub {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    &__copyright {
      margin-top: 40px;
    }

    .scroll-to-top {
      top: -24px;
      right: 20px;
    }
  }

  @media (min-width: 992px) {
    .container {
      flex-wrap: nowrap;
    }

    &__left,
    &__nav,
    &__contacts,
    &__right {
      width: auto;
    }

    &__left {
      min-width: 300px;
    }

    &__right {
      min-width: 250px;
    }

    &__lang {
      &-arrow {
        right: 0;
        left: 35px;
      }
    }
  }

  @media (max-width: 468px) {
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
