<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__left">
        <!-- Логотип и платформа -->
        <div class="footer__logo-container">
          <div class="footer__logo-wrapper">
            <img src="~/assets/logo.svg" alt="Coube" class="footer__logo" />
            <span class="footer__platform">Logistic platform</span>
          </div>
        </div>

        <!-- Копирайт -->
        <div class="footer__copyright">© COUBE 2025. Все права защищены</div>
      </div>

      <div class="footer__nav">
        <a href="#" class="footer__nav-link">Главная</a>
        <a href="#" class="footer__nav-link">Заказчик</a>
        <a href="#" class="footer__nav-link">Перевозчик</a>
        <a href="#" class="footer__nav-link">О нас</a>
        <a href="#" class="footer__nav-link">Новости</a>
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
        <a href="tel:+77074678336" class="footer__contact-link">
          <img
            src="~/assets/phone.svg"
            alt="Телефон"
            class="footer__contact-icon"
          />
          <span>+7 707 467 83-36</span>
        </a>
        <a
          href="https://wa.me/77074678336"
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
        <a href="mailto:info@coube.kz" class="footer__contact-link">
          <img
            src="~/assets/telegram.svg"
            alt="Telegram"
            class="footer__contact-icon"
          />
          <span>info@coube.kz</span>
        </a>
        <a href="mailto:office@coube.kz" class="footer__contact-link">
          <img
            src="~/assets/mail.svg"
            alt="Email"
            class="footer__contact-icon"
          />
          <span>office@coube.kz</span>
        </a>
        <a href="https://coube.kz" class="footer__contact-link" target="_blank">
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
          <img
            src="~/assets/movie.svg"
            alt="Видео"
            class="footer__movie-icon"
          />
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

const langStore = useLangStore();

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
    max-width: 1200px;
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
      content: "";
      position: absolute;
      right: 40px; /* Подвигаем стрелку ближе к селекту */
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
