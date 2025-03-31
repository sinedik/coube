<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__left">
        <!-- Логотип и платформа -->
        <div class="footer__logo-container">
          <div class="footer__logo-wrapper">
            <NuxtLink to="/">
              <img src="~/assets/logo.svg" alt="Coube" class="footer__logo" />
            </NuxtLink>
            <span class="footer__platform">Logistic platform</span>
          </div>
        </div>

        <!-- Блок Astana Hub -->
        <div class="footer__astana-hub">
          <img
            src="~/assets/astana-hub.png"
            alt="Astana Hub"
            class="footer__astana-hub-logo"
          />
          <span class="footer__certificate">№ свидетельства 1439</span>
        </div>

        <!-- Копирайт -->
        <div class="footer__copyright">© COUBE 2025. Все права защищены</div>
      </div>

      <div class="footer__nav">
        <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="footer__nav-link"
          :class="{ active: item.active }"
        >
          {{ item.text }}
        </NuxtLink>
        <div class="footer__lang">
          <select v-model="langStore.currentLang" @change="changeLang">
            <option
              v-for="lang in langStore.availableLangs"
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
            alt="Телефон"
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
            alt="WhatsApp"
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
            alt="Telegram"
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
            alt="Email"
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
            alt="Instagram"
            class="footer__contact-icon"
          />
          <span>coube.kz</span>
        </a>
      </div>

      <div class="footer__right">
        <div class="footer__docs">
          <a href="#" class="footer__doc-link">Пользовательское соглашение</a>
          <a href="#" class="footer__doc-link">Политика конфиденциальности</a>
          <p class="footer__app-title">Ознакомьтесь с платформой</p>
          <a :href="contacts.social.youtube" target="_blank">
            <img
              src="~/assets/movie.svg"
              alt="Видео"
              class="footer__movie-icon"
            />
          </a>
        </div>

        <div class="footer__app-container">
          <p class="footer__app-title">Скачивай приложение для водителя</p>
          <div class="footer__app-buttons">
            <a href="#" class="footer__app-button">
              <img src="~/assets/Apple.svg" alt="App Store" />
            </a>
            <a href="#" class="footer__app-button">
              <img src="~/assets/Google.svg" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <button class="scroll-to-top" @click="scrollToTop">
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
import { useLangStore } from "../stores/langStore";
import { useContactsStore } from "../stores/contactsStore";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const langStore = useLangStore();
const contacts = useContactsStore();

// Вычисляем текущий путь для определения активной ссылки
const currentPath = computed(() => route.path);

// Данные меню с правильными путями
const menuItems = computed(() => [
  { text: "Главная", link: "/", active: currentPath.value === "/" },
  {
    text: "Заказчик",
    link: "/customer",
    active: currentPath.value === "/customer",
  },
  {
    text: "Перевозчик",
    link: "/driver",
    active: currentPath.value === "/driver",
  },
  { text: "О нас", link: "/about", active: currentPath.value === "/about" },
  // { text: "Новости", link: "/news", active: currentPath.value === "/news" },
]);

const changeLang = () => {
  // Ничего не делаем, так как v-model автоматически обновляет значение
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
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

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
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
    .container {
      flex-direction: column;
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

    &__movie-link {
      display: inline-block;
      margin-top: 15px;
    }

    .scroll-to-top {
      top: -24px; /* Сохраняем то же смещение для мобильных устройств */
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
}
</style>
