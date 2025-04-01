<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="~/assets/logo.svg" :alt="t('header.logo.alt')" />
        </NuxtLink>
      </div>

      <!-- Навигационное меню для десктопа -->
      <nav class="header__nav" :aria-label="t('header.menu.desktopTitle')">
        <ul class="header__menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <NuxtLink
              @click="toggleMobileMenu"
              :to="item.link"
              :class="{ active: item.active }"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__right">
        <div class="header__top-actions">
          <div class="header__support">
            <span class="header__support-text">{{ t("common.support") }}</span>
          </div>
          <a
            :href="contacts.social.whatsapp.direct"
            class="header__social-link"
            target="_blank"
            :aria-label="t('header.social.whatsapp')"
          >
            <img
              src="~/assets/whatsapp.svg"
              :alt="t('header.social.whatsapp')"
              class="header__social-icon"
            />
          </a>
          <a
            :href="contacts.social.telegram.contact"
            class="header__social-link"
            target="_blank"
            :aria-label="t('header.social.telegram')"
          >
            <img
              src="~/assets/telegram.svg"
              :alt="t('header.social.telegram')"
              class="header__social-icon"
            />
          </a>
          <a
            href="tel:+77074678336"
            class="header__phone"
            :aria-label="t('common.phone')"
          >
            <img
              src="~/assets/phone.svg"
              :alt="t('common.phone')"
              class="header__phone-icon"
            />
            <span class="header__phone-text">+7 707 467 83-36</span>
          </a>

          <!-- Селектор языка -->
          <div class="header__lang">
            <select
              v-model="selectedLang"
              @change="switchLocale(selectedLang)"
              :aria-label="t('common.selectLanguage')"
            >
              <option
                v-for="lang in langStore.availableLangs"
                :key="lang.code"
                :value="lang.code"
              >
                {{ lang.name }}
              </option>
            </select>
            <span class="header__lang-arrow"></span>
          </div>

          <div class="header__mobile-menu">
            <button
              class="hamburger"
              @click="toggleMobileMenu"
              :class="{ active: mobileMenuOpen }"
              :aria-label="t('common.mobileMenu')"
              :aria-expanded="mobileMenuOpen"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mobile-nav"
      :class="{ active: mobileMenuOpen }"
      role="dialog"
      :aria-label="t('header.menu.mobileTitle')"
    >
      <div class="mobile-nav__header">
        <div class="header__logo">
          <NuxtLink to="/">
            <img src="~/assets/logo.svg" :alt="t('header.logo.alt')" />
          </NuxtLink>
        </div>

        <button
          class="mobile-nav__close"
          @click="toggleMobileMenu"
          :aria-label="t('common.close')"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <ul class="header__menu">
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink :to="item.link" :class="{ active: item.active }">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>

      <div class="header__actions">
        <div class="header__support mobile-support">
          <span class="header__support-text">{{ t("common.support") }}</span>
        </div>
        <div class="mobile-social">
          <a
            :href="contacts.social.whatsapp.direct"
            class="header__social-link"
            target="_blank"
            :aria-label="t('header.social.whatsapp')"
          >
            <img
              src="~/assets/whatsapp.svg"
              :alt="t('header.social.whatsapp')"
              class="header__social-icon"
            />
          </a>
          <a
            :href="contacts.social.telegram.contact"
            class="header__social-link"
            target="_blank"
            :aria-label="t('header.social.telegram')"
          >
            <img
              src="~/assets/telegram.svg"
              :alt="t('header.social.telegram')"
              class="header__social-icon"
            />
          </a>
          <a
            href="tel:+77074678336"
            class="header__phone mobile-phone"
            :aria-label="t('common.phone')"
          >
            <img
              src="~/assets/phone.svg"
              :alt="t('common.phone')"
              class="header__phone-icon"
            />
            <span>+7 707 467 83-36</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from "vue";
import { useLangStore } from "../stores/langStore";
import { useContactsStore } from "../stores/contactsStore";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useNuxtApp } from "#app";

// Получаем экземпляр Nuxt приложения
const nuxtApp = useNuxtApp();

// Используем Vue Router для определения текущего маршрута
const route = useRoute();

// Используем Pinia
const langStore = useLangStore();
const contacts = useContactsStore();

// Используем i18n
const { t, locale } = useI18n();

// Реактивные переменные
const mobileMenuOpen = ref(false);
const isMobile = ref(false);
const selectedLang = ref(langStore.currentLang);

// Вычисляем текущий путь для определения активной ссылки
const currentPath = computed(() => route.path);

// Данные меню с правильными путями
const menuItems = computed(() => [
  { text: t("common.home"), link: "/", active: currentPath.value === "/" },
  {
    text: t("common.client"),
    link: "/customer",
    active: currentPath.value === "/customer",
  },
  {
    text: t("common.carrier"),
    link: "/driver",
    active: currentPath.value === "/driver",
  },
  {
    text: t("common.about"),
    link: "/about",
    active: currentPath.value === "/about",
  },
  // { text: t('common.news'), link: "/news", active: currentPath.value === "/news" },
]);

// Метод для обработки изменения языка
const switchLocale = async (newLocale) => {
  try {
    if (newLocale === locale.value) return;

    console.log(`Переключение языка на ${newLocale}`, {
      current: locale.value,
    });

    // Устанавливаем язык в хранилище
    langStore.setLang(newLocale);

    // Напрямую устанавливаем язык в i18n
    locale.value = newLocale;

    // Обновляем интерфейс после смены языка
    await nextTick();

    // Обновляем меню после смены языка
    await nextTick();

    // Проверяем результат смены языка
    console.log(`Язык после переключения: ${locale.value}`);
  } catch (error) {
    console.error("Ошибка при смене языка:", error);
  }
};

// Методы для управления мобильным меню
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.classList.toggle("no-scroll", mobileMenuOpen.value);
};

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 992;
  if (!isMobile.value && mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
    document.body.classList.remove("no-scroll");
  }
};

// Хуки жизненного цикла
onMounted(() => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);

  // Убедимся, что локаль i18n синхронизирована с хранилищем
  if (locale.value !== langStore.currentLang) {
    locale.value = langStore.currentLang;
  }

  // Устанавливаем начальное значение для селектора
  selectedLang.value = locale.value;
  console.log(
    `Компонент смонтирован, язык: ${locale.value}, хранилище: ${langStore.currentLang}`
  );
});

// Следим за изменениями языка в i18n и обновляем выбранный язык
watch(
  () => locale.value,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

// Следим за изменениями в хранилище
watch(
  () => langStore.currentLang,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

onUnmounted(() => {
  window.removeEventListener("resize", checkIfMobile);
});

watch(route, () => {
  mobileMenuOpen.value = false;
  document.body.classList.remove("no-scroll");
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "~/assets/scss/variables" as *;

.header {
  background-color: $dark-bg;
  color: $white;
  border-radius: 24px;
  padding: 15px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: $white;
    }

    img {
      height: 40px;
    }
  }

  &__nav {
    margin-left: 40px; // Уменьшенный отступ от логотипа, так как текста нет
    flex-grow: 1;
  }

  &__menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 24px; // Расстояние между пунктами меню

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      color: $white;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s;
      white-space: nowrap;

      &:hover,
      &.active {
        color: $primary-color;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
    margin-left: auto; // Это сместит правый блок к краю контейнера
  }

  &__top-actions {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__support {
    display: flex;
    align-items: center;
    gap: 8px;
    color: $white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &-icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    &-text {
      @media (max-width: 1280px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 120px;
      }

      @media (max-width: 820px) {
        display: none;
      }
    }
  }

  &__social {
    &-link {
      display: flex;
      align-items: center;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    &-icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
  }

  &__phone {
    display: flex;
    align-items: center;
    color: $white;
    text-decoration: none;
    margin-right: 20px;
    white-space: nowrap;

    &-icon {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }

    &-text {
      @media (max-width: 1100px) {
        display: none; // Скрываем текст только в главном хедере
      }
    }
  }

  &__lang {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 0; // Убираем отступ справа, так как кнопка удалена

    select {
      appearance: none;
      background: transparent;
      border: none;
      color: $white;
      cursor: pointer;
      font-size: 16px;
      padding-right: 20px;

      &:focus {
        outline: none;
      }

      option {
        color: $dark-bg;
        background: $white;
      }
    }

    &-arrow {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid $primary-color;
      pointer-events: none;
    }
  }

  &__button {
    display: none; // Скрываем кнопку
  }

  &__mobile-menu {
    display: none;
    margin-left: 15px;
  }
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  padding: 0;
  width: 25px;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: $white;
    border-radius: 3px;
    transition: all 0.3s;
  }

  &.active {
    span {
      &:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $dark-bg;
  z-index: 100;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: none;

  &.active {
    transform: translateX(0);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: relative;

    span {
      display: block;
      width: 30px;
      height: 3px;
      background-color: $white;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left: 0;

      &:first-child {
        transform: rotate(45deg);
      }

      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  .header__menu {
    flex-direction: column;
    margin-bottom: 30px;

    li {
      margin: 15px 0;
    }

    a {
      font-size: 20px;
    }
  }

  .header__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    .mobile-support {
      .header__support-text {
        font-size: 16px;
        display: block !important;
        max-width: none;
      }
    }

    .mobile-social {
      display: flex;
      gap: 15px;
    }

    .header__phone {
      span {
        display: inline-block !important;
      }
    }
  }

  .header__lang {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 0;
    margin-bottom: 10px;

    select {
      appearance: none;
      background: transparent;
      border: none;
      color: $white;
      cursor: pointer;
      font-size: 16px;
      padding-right: 20px;

      &:focus {
        outline: none;
      }

      option {
        color: $dark-bg;
        background: $white;
      }
    }

    &-arrow {
      content: "";
      position: absolute;
      right: 0;
      left: 35px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid $primary-color;
      pointer-events: none;
    }
  }
}

body.no-scroll {
  overflow: hidden;
}

// Более детальная бесшовная адаптивность
@media (max-width: 1400px) {
  .header {
    &__menu {
      li {
        margin-right: 20px; // Немного уменьшаем отступы между пунктами меню
      }
    }
  }
}

@media (max-width: 1280px) {
  .header {
    &__nav {
      margin-left: 30px; // Еще уменьшаем отступ от логотипа
    }

    &__menu {
      li {
        margin-right: 18px; // Продолжаем уменьшать отступы между пунктами
      }
    }

    &__lang {
      margin-right: 40px; // Уменьшаем отступ перед кнопкой
    }
  }
}

@media (max-width: 1140px) {
  .header {
    &__menu {
      li {
        margin-right: 15px; // Еще меньше отступов
      }
    }

    &__lang {
      margin-right: 30px; // Еще уменьшаем отступ
    }
  }
}

@media (max-width: 1100px) {
  .header {
    &__phone-text {
      display: none; // Скрываем текст телефона, оставляем только иконку
    }

    &__phone {
      margin-right: 15px; // Уменьшаем отступ после иконки телефона
    }
  }
}

@media (max-width: 900px) {
  .header {
    &__menu {
      li {
        margin-right: 12px;

        a {
          font-size: 14px;
        }
      }
    }

    &__lang {
      margin-right: 0; // Убираем отступ справа

      select {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 820px) {
  .header {
    &__nav {
      display: none;
    }

    &__top-actions {
      .header__phone {
        display: none;
      }
    }

    &__lang {
      display: block;
      margin-right: 15px;
    }

    &__mobile-menu {
      display: block;
      margin-left: 0;
    }

    &__right {
      margin-left: 0;
    }
  }

  .mobile-nav {
    display: block;
  }

  .hamburger {
    display: flex;
  }
}

/* Добавляем специальные стили для телефона в мобильном меню */
.mobile-phone {
  span {
    display: inline-block !important; // Принудительно показываем номер в мобильном меню
  }
}

@media (min-width: 992px) {
  .header {
    &__lang {
      &-arrow {
        right: 0;
        left: 35px;
      }
    }
  }
}
</style>
