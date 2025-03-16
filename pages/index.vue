<template>
  <div class="home-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <img
            src="~/assets/banner.png"
            alt="COUBE - грузоперевозки"
            class="banner-image"
          />
        </div>
        <div class="banner-content-wrapper">
          <div class="banner-content">
            <h1 class="banner-title">
              {{ "COUBE — цифровой агрегатор\nавтомобильных грузоперевозок" }}
            </h1>
            <p class="banner-description">
              {{
                "Мы упростили взаимодействие между\nзаказчиком и перевозчиком, сделали процесс\nперевозки грузов безопасным и прозрачным"
              }}
            </p>
            <button class="banner-button">Регистрация</button>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="container">
          <div class="about-header">
            <div class="about-title-block">
              <h2 class="about-title">О нас</h2>
            </div>
            <div class="about-image-block">
              <div class="about-image-container">
                <img
                  src="~/assets/trucks.png"
                  alt="Грузовики COUBE"
                  class="about-image"
                />
              </div>
            </div>
            <div class="about-description-block">
              <div class="about-description">
                <p>
                  {{
                    "Coube это цифровой агрегатор грузовых перевозок,\nсочетающий в себе ряд важных функций, таких как:"
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="features-grid">
            <div class="feature-item">
              <p class="feature-text">
                Размещение заказа и поиск прямого исполнителя
              </p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Онлайн мониторинг маршрута</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Подписание документов по ЭЦП</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Ai подбор обратных грузов</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Создание счетов и АВР</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Оплата услуг через платформу</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Объективная цена перевозки</p>
            </div>

            <div class="feature-item">
              <p class="feature-text">Аналитические отчеты</p>
            </div>

            <div class="feature-item highlight">
              <p class="feature-text">Интеграция с 1С бухгалтерия</p>
            </div>
          </div>
        </div>
      </section>

      <section class="steps-section">
        <div class="container">
          <div class="steps-header">
            <h2 class="steps-title">Простые шаги платформы</h2>
            <div class="role-switcher">
              <button
                class="role-button"
                :class="{ active: activeRole === 'customer' }"
                @click="setActiveRole('customer')"
              >
                Заказчик
              </button>
              <button
                class="role-button"
                :class="{ active: activeRole === 'executor' }"
                @click="setActiveRole('executor')"
              >
                Исполнитель
              </button>
            </div>
          </div>

          <div
            class="steps-diagram"
            v-if="activeRole === 'customer' && !isMobile"
          >
            <div class="steps-column left">
              <div class="step-item left">
                <div class="step-content">
                  <p>Размещает заявку на перевозку</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content">
                  <p>Выбирает перевозчиков</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content">
                  <p>Мониторинг в пути</p>
                </div>
              </div>
            </div>

            <div class="steps-timeline">
              <div
                class="timeline-line"
                :style="{
                  top: customerFirstDotPosition + 'px',
                  height:
                    customerLastDotPosition - customerFirstDotPosition + 'px',
                }"
              ></div>
              <div
                v-for="(dot, index) in customerStepsDots"
                :key="'customer-dot-' + index"
                class="timeline-dot"
                :style="{ top: dot.position + 'px' }"
              ></div>
            </div>

            <div class="steps-column right">
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content">
                  <p>Ждет отклики перевозчиков</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content">
                  <p>Подписывает договор с перевозчиком</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content">
                  <p>Получение счета от перевозчика</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="steps-diagram mobile-steps"
            v-if="activeRole === 'customer' && isMobile"
          >
            <div class="mobile-steps-container">
              <div class="step-item">
                <div class="step-content">
                  <p>Размещает заявку на перевозку</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Ждет отклики перевозчиков</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Выбирает перевозчиков</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Подписывает договор с перевозчиком</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Мониторинг в пути</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Получение счета от перевозчика</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="steps-diagram"
            v-if="activeRole === 'executor' && !isMobile"
          >
            <div class="steps-column left">
              <div class="step-item left">
                <div class="step-content">
                  <p>Поиск размещенных заказов</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content">
                  <p>Ожидания подписания договора от заказчика</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content">
                  <p>Выставление счет после завершения перевозки</p>
                </div>
              </div>
            </div>

            <div class="steps-timeline">
              <div
                class="timeline-line"
                :style="{
                  top: executorFirstDotPosition + 'px',
                  height:
                    executorLastDotPosition - executorFirstDotPosition + 'px',
                }"
              ></div>
              <div
                v-for="(dot, index) in executorStepsDots"
                :key="'executor-dot-' + index"
                class="timeline-dot"
                :style="{ top: dot.position + 'px' }"
              ></div>
            </div>

            <div class="steps-column right">
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content">
                  <p>Отклик на нужный заказ</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content">
                  <p>Назначение водителя</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-spacer"></div>
            </div>
          </div>

          <div
            class="steps-diagram mobile-steps"
            v-if="activeRole === 'executor' && isMobile"
          >
            <div class="mobile-steps-container">
              <div class="step-item">
                <div class="step-content">
                  <p>Поиск размещенных заказов</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Отклик на нужный заказ</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Ожидания подписания договора от заказчика</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Назначение водителя</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-content">
                  <p>Выставление счет после завершения перевозки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="driver-section">
        <div class="container">
          <div class="driver-content">
            <div class="driver-info">
              <div class="driver-logo">
                <img
                  src="~/assets/logo-clear.svg"
                  alt="COUBE"
                  class="logo-image"
                />
              </div>
              <h2 class="driver-title">Для водителя</h2>
              <p class="driver-description">
                Установите приложение для водителя COUBE и открывайте доступ к
                самым прибыльным заказам прямо со своего смартфона.
              </p>
              <div class="app-links desktop-only">
                <a href="#" class="app-link">
                  <img
                    src="~/assets/Apple.svg"
                    alt="App Store"
                    class="app-badge"
                  />
                </a>
                <a href="#" class="app-link">
                  <img
                    src="~/assets/Google.svg"
                    alt="Google Play"
                    class="app-badge"
                  />
                </a>
              </div>
            </div>
            <div class="driver-phones desktop-only">
              <img
                src="~/assets/phones.png"
                alt="Приложение COUBE для водителя"
                class="phones-image"
              />
            </div>
            <div class="driver-phones mobile-only">
              <img
                src="~/assets/phones.png"
                alt="Приложение COUBE для водителя"
                class="phones-image"
              />
            </div>
            <div class="app-links mobile-only">
              <a href="#" class="app-link">
                <img
                  src="~/assets/Apple.svg"
                  alt="App Store"
                  class="app-badge"
                />
              </a>
              <a href="#" class="app-link">
                <img
                  src="~/assets/Google.svg"
                  alt="Google Play"
                  class="app-badge"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const activeRole = ref("customer");
const isMobile = ref(false);

// Расчет позиций точек для временной шкалы заказчика
const customerStepsDots = computed(() => {
  return [
    { position: 47 }, // Первый блок слева (Размещает заявку)
    { position: 128 }, // Первый блок справа (Ждет отклики)
    { position: 223 }, // Второй блок слева (Выбирает перевозчиков)
    { position: 310 }, // Второй блок справа (Подписывает договор)
    { position: 400 }, // Третий блок слева (Мониторинг в пути)
    { position: 485 }, // Третий блок справа (Получение счета)
  ];
});

// Расчет позиций точек для временной шкалы исполнителя
const executorStepsDots = computed(() => {
  return [
    { position: 47 }, // Первый блок слева (Поиск заказов)
    { position: 128 }, // Первый блок справа (Отклик на заказ)
    { position: 223 }, // Второй блок слева (Ожидание подписания)
    { position: 310 }, // Второй блок справа (Назначение водителя)
    { position: 400 }, // Третий блок слева (Выставление счета)
  ];
});

// Получаем позицию первой и последней точки для каждой роли
const customerFirstDotPosition = computed(() => {
  return customerStepsDots.value[0].position;
});

const customerLastDotPosition = computed(() => {
  const dots = customerStepsDots.value;
  return dots[dots.length - 1].position;
});

const executorFirstDotPosition = computed(() => {
  return executorStepsDots.value[0].position;
});

const executorLastDotPosition = computed(() => {
  const dots = executorStepsDots.value;
  return dots[dots.length - 1].position;
});

const setActiveRole = (role) => {
  activeRole.value = role;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style lang="scss" scoped>
// Глобальные стили для скрытия/отображения элементов
.mobile-only {
  display: none !important;
}

.desktop-only {
  display: block !important;
}

// Специальные правила для flex-элементов
.app-links.desktop-only {
  display: flex !important;
}

.app-links.mobile-only {
  display: none !important;
}

// Медиа-запросы для переключения видимости
@media (max-width: 1024px) {
  .mobile-only {
    display: block !important;
  }

  .desktop-only {
    display: none !important;
  }

  .app-links.mobile-only {
    display: flex !important;
  }

  .app-links.desktop-only {
    display: none !important;
  }
}

.home-page {
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-container {
  width: 100%;
  max-width: 1440px;
}

.banner-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  margin-top: 40px;
}

.banner-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
}

.container {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0 40px;
}

.banner-content {
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}

.banner-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  white-space: pre-wrap;
}

.banner-description {
  white-space: pre-wrap;
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  opacity: 0.9;
}

.banner-button {
  background-color: #ffa500;
  color: #000;
  border: none;
  border-radius: 100px;
  padding: 16px 40px;
  width: 100%;
  max-width: 240px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 160px;

  &:hover {
    background-color: darken(#ffa500, 10%);
  }
}

// Адаптивность для мобильных устройств
@media (max-width: 768px) {
  .banner-section {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 24px 24px;
  }

  .banner-image-container {
    position: relative;
    height: 240px;
    order: 2;

    &::after {
      display: none;
    }
  }

  .banner-content-wrapper {
    position: relative;
    height: auto;
    padding: 24px 16px;
    order: 1;
    background-color: #fff;
    justify-content: flex-start;
  }

  .banner-content {
    max-width: 100%;
    text-align: left;
    padding: 0;
    color: #000;
    justify-content: flex-start;
  }

  .banner-title {
    font-size: 20px;
    margin-bottom: 8px;
    color: #000;
  }

  .banner-description {
    font-size: 14px;
    margin-bottom: 24px;
    color: #000;
    opacity: 1;
  }

  .banner-button {
    width: 100%;
    max-width: 100%;
    padding: 16px 0;
    margin-top: 0;
  }

  .about-section {
    padding: 40px 16px;
  }

  .about-section .container {
    padding: 0;
  }

  .steps-section {
    padding: 40px 16px;
  }

  .steps-section .container {
    padding: 0;
  }

  .driver-section {
    padding: 40px 16px;
    border-radius: 0;
    margin-bottom: 0;
  }

  .driver-section .container {
    padding: 0;
  }
}

// Стили для секции "О нас"
.about-section {
  padding: 80px 0px;
  position: relative;
}

.about-section .container {
  padding: 0;
}

.about-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
  gap: 40px;
  justify-content: space-between;
}

.about-title-block {
  /* flex-shrink: 0; */
}

.about-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
}

.about-image-block {
  /* flex-shrink: 0; */
}

.about-image-container {
  width: 330px;
  height: 80px;
  overflow: hidden;
  border-radius: 25px;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-description-block {
  /* flex: 0.5; */
}

.about-description {
  font-size: 24px;
  line-height: 1.5;

  p {
    margin: 0;
    white-space: pre-wrap;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-item {
  position: relative;
  padding: 20px;
  border-radius: 12px;
  background-color: #f5f5f5;
  min-height: 80px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 40px;
    background-color: #333;
    border-radius: 12px;
  }

  &.highlight::before {
    background-color: #ffa500;
  }
}

.feature-text {
  margin: 0;
  padding-left: 16px;
  font-size: 24px;
  font-weight: 400;
}

// Адаптивность для секции "О нас"
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-header {
    flex-wrap: wrap;
    gap: 20px;
  }

  .about-title-block {
    margin-bottom: 0;
    width: auto;
  }

  .about-description-block {
    width: 100%;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 40px 16px;
  }

  .about-section .container {
    padding: 0;
    width: 100%;
  }

  .about-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
    gap: 16px;
  }

  .about-title-block {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .about-image-block {
    position: absolute;
    right: 16px;
  }

  .about-title {
    font-size: 24px;
    margin-right: 0;
  }

  .about-image-container {
    width: 130px;
    height: 30px;
    border-radius: 8px;
  }

  .about-description-block {
    width: 100%;
  }

  .about-description {
    font-size: 14px;
    line-height: 1.4;
  }

  .features-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .feature-item {
    min-height: auto;
    padding: 12px 16px;
    border-radius: 0;
    background-color: transparent;
    width: 100%;

    &::before {
      height: 24px;
      width: 3px;
    }
  }

  .feature-text {
    font-size: 14px;
    padding-left: 12px;
    font-weight: 400;
  }
}

// Стили для секции "Простые шаги платформы"
.steps-section {
  padding: 40px 0px;
}

.steps-section .container {
  padding: 0;
}

.steps-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.steps-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
}

.role-switcher {
  display: flex;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  width: 360px;
  overflow: hidden;
}

.role-button {
  flex: 1;
  padding: 12px 24px;
  border: none;
  background: transparent;
  border-radius: 100px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;

  &.active {
    background-color: #ffa500;
    color: #000;
    font-weight: 600;
  }
}

.steps-diagram {
  display: flex;
  background-color: #ffa500;
  border-radius: 24px;
  padding: 60px 40px;
  position: relative;
  min-height: 600px;

  &.mobile-steps {
    padding: 0 !important;
    min-height: auto !important;
    margin: 0 !important;

    .steps-column {
      width: 100%;
      padding: 0 !important;
    }

    .step-item {
      margin-bottom: 1px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
}

.steps-column {
  flex: 1;
  display: flex;
  flex-direction: column;

  &.left {
    padding-right: 20px;
    align-items: flex-end;
  }

  &.right {
    padding-left: 20px;
    align-items: flex-start;
  }
}

.step-spacer {
  height: 80px;
}

.step-item {
  margin-bottom: 0;
  position: relative;
  display: flex;

  &.left {
    justify-content: flex-end;
  }

  &.right {
    justify-content: flex-start;
  }
}

.step-content {
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 16px;
  margin: 16px 0;
  padding: 20px 24px;
  position: relative;
  width: auto;
  min-width: 320px;
  height: 64px; /* Фиксированная высота для точного позиционирования */
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    display: none;
  }

  .steps-column.left & {
    &::after {
      display: none;
    }
  }

  .steps-column.right & {
    &::after {
      display: none;
    }
  }

  p {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    white-space: nowrap;
  }
}

.steps-timeline {
  width: 2px;
  position: relative;
  margin: 0 20px;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  background-color: transparent;
  z-index: 1;
  border-left: 2px dashed rgba(0, 0, 0, 0.2);
}

.timeline-dots {
  display: none;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  left: -7px;
  z-index: 2;
  border: 2px solid #ffa500;
  transform: translateY(-50%); /* Центрирование точки по вертикали */
}

// Адаптивность для секции "Простые шаги платформы"
@media (max-width: 1024px) {
  .steps-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .steps-title {
    margin-bottom: 24px;
  }

  .role-switcher {
    width: 100%;
    max-width: 360px;
  }
}

@media (max-width: 768px) {
  .steps-section {
    padding: 40px 16px;
  }

  .steps-section .container {
    padding: 0;
  }

  .steps-header {
    padding: 0;
    margin-bottom: 20px;
  }

  .steps-title {
    font-size: 24px;
  }

  .role-switcher {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
  }

  .role-button {
    padding: 10px 16px;
    font-size: 14px;
  }

  .steps-diagram {
    margin: 0;
  }

  .step-content p {
    white-space: normal;
  }
}

.mobile-steps {
  background-color: #ffa500;
  margin: 0 !important;
  padding: 35px !important;
  border-radius: 32px !important;

  .mobile-steps-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    gap: 0;
    padding: 35px;
  }

  .step-item {
    margin-bottom: 0;
    position: relative;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 27px;
      border-left: 2px dashed rgba(0, 0, 0, 0.2);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .mobile-timeline-connector {
    display: none;
  }

  .step-content {
    background-color: #1a1a1a;
    border-radius: 16px;
    padding: 16px;
    max-width: 100%;
    width: 100%;
    margin: 0;
    height: auto;
    margin-bottom: 27px;

    p {
      text-align: center;
      margin: 0;
      color: white;
      font-size: 16px;
      font-weight: 500;
      white-space: normal;
    }
  }
}

// Адаптивность для мобильных устройств с маленьким экраном
@media (max-width: 480px) {
  .mobile-steps {
    .step-content {
      p {
        font-size: 16px;
        white-space: normal;
      }
    }
  }
}

// Стили для секции "Для водителя"
.driver-section {
  padding: 40px 40px;
  background-color: #f5f5f5;
  border-radius: 24px;
  margin-bottom: 80px;
}

.driver-section .container {
  padding: 0;
}

.driver-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.driver-info {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.driver-logo {
  width: 90px;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.driver-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  text-align: center;
}

.driver-description {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: center;
}

.app-links {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.app-link {
  display: block;
  min-width: 180px;
}

.app-badge {
  width: 100%;
  height: auto;
}

.driver-phones {
  max-width: 50%;
}

.phones-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

// Адаптивность для секции "Для водителя"
@media (max-width: 1024px) {
  .driver-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .driver-info {
    max-width: 100%;
    margin-bottom: 0;
    align-items: center;
    width: 100%;
  }

  .driver-phones {
    max-width: 80%;
    margin: 30px 0;
    order: 2;
  }

  .app-links.mobile-only {
    order: 3;
    margin-top: 0;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .driver-section {
    padding: 40px 16px;
    border-radius: 0;
    margin-bottom: 0;
  }

  .driver-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .driver-description {
    font-size: 14px;
    margin-bottom: 0;
  }

  .driver-phones {
    max-width: 100%;
    margin: 24px 0;
  }

  .app-link {
    max-width: 140px;
  }

  .app-links {
    justify-content: center;
  }
}

// Стили для секций, кроме баннера
.about-section .container,
.steps-section .container,
.driver-section .container {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0;
}
</style>
