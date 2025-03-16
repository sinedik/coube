<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <a href="/">
          <img src="~/assets/logo.svg" alt="Coube" />
        </a>
      </div>

      <!-- Навигационное меню для десктопа -->
      <nav class="header__nav">
        <ul class="header__menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link" :class="{ active: item.active }">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="header__right">
        <div class="header__top-actions">
          <a href="tel:+77074678336" class="header__phone">
            <img
              src="~/assets/phone.svg"
              alt="Телефон"
              class="header__phone-icon"
            />
            <span class="header__phone-text">+7 707 467 83-36</span>
          </a>

          <!-- Нативный селект для переключения языка через Pinia -->
          <div class="header__lang">
            <select v-model="langStore.currentLang" @change="changeLang">
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

          <a href="#" class="header__button">Войти</a>
        </div>

        <div class="header__mobile-menu">
          <button
            class="hamburger"
            @click="toggleMobileMenu"
            :class="{ active: mobileMenuOpen }"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile-nav" :class="{ active: mobileMenuOpen }">
      <div class="mobile-nav__header">
        <div class="header__logo">
          <a href="/">
            <img src="~/assets/logo.svg" alt="Coube" />
          </a>
        </div>

        <button class="mobile-nav__close" @click="toggleMobileMenu">
          <span></span>
          <span></span>
        </button>
      </div>

      <ul class="header__menu">
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.link" :class="{ active: item.active }">
            {{ item.text }}
          </a>
        </li>
      </ul>

      <div class="header__actions">
        <a href="tel:+77074678336" class="header__phone mobile-phone">
          <img
            src="~/assets/phone.svg"
            alt="Телефон"
            class="header__phone-icon"
          />
          <span>+7 707 467 83-36</span>
        </a>

        <!-- Нативный селект для переключения языка в мобильном меню -->
        <div class="header__lang">
          <select v-model="langStore.currentLang" @change="changeLang">
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

        <a href="#" class="header__button">Войти</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLangStore } from "../stores/langStore";

// Используем Pinia
const langStore = useLangStore();

// Реактивные переменные
const mobileMenuOpen = ref(false);
const isMobile = ref(false);

// Данные меню
const menuItems = ref([
  { text: "Главная", link: "#", active: true },
  { text: "Заказчик", link: "#", active: false },
  { text: "Перевозчик", link: "#", active: false },
  { text: "О нас", link: "#", active: false },
  { text: "Новости", link: "#", active: false },
]);

// Метод для обработки изменения языка
const changeLang = () => {
  // Ничего не делаем, так как v-model автоматически обновляет значение
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
});

onUnmounted(() => {
  window.removeEventListener("resize", checkIfMobile);
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "~/assets/scss/variables" as *;

.header {
  background-color: $dark-bg;
  color: $white;
  padding: 15px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
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
    margin-right: 57px; // Сохраняем отступ от кнопки

    select {
      appearance: none;
      background: transparent;
      border: none;
      color: $white;
      cursor: pointer;
      font-size: 16px;
      padding-right: 20px; /* Уменьшаем отступ для стрелки */

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
      right: 0px; /* Подвигаем стрелку ближе к селекту, как в футере */
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid $primary-color; /* Желтая стрелка */
      pointer-events: none;
    }
  }

  &__button {
    background-color: $primary-color;
    color: $white;
    padding: 10px 20px;
    border-radius: 100px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
    white-space: nowrap;

    &:hover {
      background-color: color.adjust($primary-color, $lightness: -10%);
    }
  }

  &__mobile-menu {
    display: none;
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

  span {
    display: block;
    width: 25px;
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

    .header__phone {
      span {
        display: inline-block !important; // Принудительно показываем номер в мобильном меню
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
          font-size: 14px; // Уменьшаем размер шрифта в меню
        }
      }
    }

    &__lang {
      margin-right: 20px;

      select {
        font-size: 14px; // Уменьшаем размер шрифта в селекторе
      }
    }

    &__button {
      padding: 8px 15px; // Уменьшаем размер кнопки
      font-size: 14px; // Уменьшаем размер шрифта в кнопке
    }
  }
}

@media (max-width: 820px) {
  .header {
    &__nav,
    &__top-actions {
      display: none;
    }

    &__mobile-menu {
      display: block;
    }

    &__right {
      margin-left: 0;
    }
  }

  .mobile-nav {
    display: block;
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
