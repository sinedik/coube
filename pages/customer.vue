<template>
  <div class="customer-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <img
            src="~/assets/customer.png"
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
            <div class="banner-buttons">
              <a href="https://platform.coube.kz/signin" class="banner-button">
                {{ "Подключиться" }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="value-section">
        <div class="container">
          <div class="value-content">
            <div class="value-header">
              <div class="value-header-content">
                <h2 class="value-title">Ценность для заказчика</h2>
              </div>
              <div class="value-image">
                <img src="~/assets/trucks.png" alt="Грузовики COUBE" />
              </div>
            </div>
            <p class="value-description">
              {{
                "Цифровая логистическая платформа и агрегатор помогаютсократить затраты,\nускорить поиск перевозчиков,контролировать доставку и автоматизировать\nдокументооборот для грузоперевозок наземным и водным транспортом."
              }}
            </p>
            <div class="value-grid">
              <div class="value-item">
                <div class="value-number">1.</div>
                <h3 class="value-title">
                  Быстрый и удобный поиск перевозчиков
                </h3>
                <ul class="value-list">
                  <li>Доступ к широкой сети проверенных перевозчиков.</li>
                  <li>
                    Возможность выбора оптимального транспорта по цене, срокам и
                    условиям.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">2.</div>
                <h3 class="value-title">Постоянный доступ к заказам</h3>
                <ul class="value-list">
                  <li>Большая база грузов — можно быстро находить заказы.</li>
                  <li>
                    Возможность выбора оптимальных маршрутов и рейсов для
                    максимальной загрузки.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">3.</div>
                <h3 class="value-title">
                  Факторинг для удобного финансирования
                </h3>
                <ul class="value-list">
                  <li>
                    Возможность получить отсрочку платежа для бизнеса с любым
                    оборотом.
                  </li>
                  <li>
                    Прозрачные финансовые инструменты без необходимости
                    поддержки.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">4.</div>
                <h3 class="value-title">Онлайн-страхование грузов</h3>
                <ul class="value-list">
                  <li>
                    Быстрое оформление страховки онлайн в интерфейсе без
                    бумажной волокиты.
                  </li>
                  <li>
                    Гибкие условия страхования, подходящие под любой тип груза.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">5.</div>
                <h3 class="value-title">Гибкость и удобство работы</h3>
                <ul class="value-list">
                  <li>
                    Возможность выбора как разовых, так и долгосрочных
                    контрактов.
                  </li>
                  <li>
                    Удобный интерфейс для размещения под любые объемы и типы
                    грузов.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">6.</div>
                <h3 class="value-title">Минимизация рисков и надежность</h3>
                <ul class="value-list">
                  <li>Работа только с проверенными перевозчиками.</li>
                  <li>Возможность страхования груза через платформу.</li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">7.</div>
                <h3 class="value-title">Прозрачность и контроль перевозки</h3>
                <ul class="value-list">
                  <li>Онлайн-отслеживание груза в реальном времени.</li>
                  <li>Автоматическое уведомление о статусе доставки.</li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">8.</div>
                <h3 class="value-title">Экономия на логистике</h3>
                <ul class="value-list">
                  <li>Конкурентные цены от проверенных перевозчиков.</li>
                  <li>Оптимальные маршруты помогут сэкономить на доставке.</li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">9.</div>
                <h3 class="value-title">Автоматизация документооборота</h3>
                <ul class="value-list">
                  <li>
                    Электронные накладные, акты и счет-фактуры в одном
                    интерфейсе.
                  </li>
                  <li>Прозрачная бухгалтерия и интеграция с ERP-системами.</li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">10.</div>
                <h3 class="value-title">Инструменты аналитики и статистики</h3>
                <ul class="value-list">
                  <li>Статистика по затратам и эффективности логистики.</li>
                  <li>
                    Возможность оптимизации логистических процессов на основе
                    данных.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laptop-section">
        <div class="container">
          <div class="laptop-container">
            <div class="laptop-header">
              <div class="laptop-header-content">
                <h2 class="laptop-title">Управление перевозками</h2>
                <p class="laptop-description">
                  Простой способ управления и мониторинга перевозкой грузов
                </p>
              </div>
              <div class="laptop-image-small">
                <img src="~/assets/trucks.png" alt="Грузовики COUBE" />
              </div>
            </div>
            <img
              src="~/assets/laptop-customer.png"
              alt="Интерфейс COUBE для заказчиков"
              class="laptop-image"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.customer-page {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.main-container {
  width: 100%;
  max-width: 1440px;
  overflow-x: hidden;
}

.banner-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  margin-top: 40px;
  box-sizing: border-box;
  min-height: 560px;
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
  box-sizing: border-box;
}

.banner-content {
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
}

.banner-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  white-space: pre-wrap;
  word-break: break-word;
}

.banner-description {
  white-space: pre-wrap;
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  opacity: 0.9;
  word-break: break-word;
}

.banner-button {
  background-color: #f19e22;
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
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

.banner-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.platform-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.platform-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.platform-buttons {
  display: flex;
  gap: 16px;
}

.platform-button {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 1024px) {
  .banner-title {
    font-size: 36px;
  }

  .banner-description {
    font-size: 20px;
  }

  .banner-button {
    margin-top: 120px;
  }
}

@media (max-width: 768px) {
  .banner-section {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 24px 24px;
    margin-top: 0;
    min-height: auto;
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
    font-size: 24px;
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
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }

  .banner-buttons {
    margin-top: 24px;
    gap: 16px;
  }
}

@media (max-width: 460px) {
  .banner-content-wrapper {
    padding: 24px 0px;
  }
}

.value-section {
  padding: 80px 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  box-sizing: border-box;
}

.value-content {
  width: 100%;
}

.value-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
  margin-bottom: 40px;
}

.value-header-content {
  flex: 1;
  max-width: 600px;
}

.value-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.value-description {
  font-size: 24px;
  line-height: 1.5;
  color: #333;
  margin-top: 30px;
  white-space: pre-wrap;
  margin-bottom: 50px;
}

.value-image {
  width: 330px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.value-item {
  background: #f5f5f5;
  padding: 32px 24px;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #f19e22;
    color: #fff;

    .value-number {
      color: #fff;
    }

    .value-list li {
      color: #fff;

      &:before {
        background-color: #fff;
      }
    }
  }
}

.value-number {
  font-size: 36px;
  font-weight: 800;
  color: #f19e22;
  margin-bottom: 16px;
}

.value-item h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.3;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 22px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 12px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #f19e22;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 1024px) {
  .value-header {
    gap: 40px;
  }

  .value-title {
    font-size: 36px;
  }

  .value-description {
    font-size: 20px;
  }

  .value-image {
    width: 250px;
  }

  .value-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .value-item h3 {
    font-size: 20px;
  }

  .value-list li {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .value-section {
    padding: 40px 0;
  }

  .container {
    padding: 0 16px;
  }

  .value-header {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
    align-items: center;
  }

  .value-header-content {
    max-width: 100%;
  }

  .value-title {
    font-size: 24px;
    margin-bottom: 16px;
    display: block;
  }

  .value-description {
    font-size: 14px;
    line-height: 1.4;
  }

  .value-image {
    width: 130px;
    height: 30px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .value-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .value-item {
    padding: 24px;
    border-radius: 12px;
  }

  .value-number {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .value-item h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .value-list li {
    font-size: 14px;
    line-height: 1.4;
    padding-left: 12px;

    &:before {
      top: 6px;
      width: 4px;
      height: 4px;
    }
  }
}

@media (max-width: 460px) {
  .value-item {
    padding: 24px 0;
  }

  .container {
    padding: 0px !important;
  }

  .value-section {
    padding: 26px 0;
  }
}

.laptop-section {
  padding: 54px 0;
  width: 100%;
  background-color: #fff;
  margin-bottom: 54px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .laptop-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .laptop-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    margin-bottom: 40px;
    width: 100%;
  }

  .laptop-header-content {
    flex: 1;
    max-width: 600px;
  }

  .laptop-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 1.2;
    text-align: left;
    white-space: nowrap;
  }

  .laptop-description {
    font-size: 24px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 0;
    text-align: left;
    white-space: pre;
    margin-top: 30px;
  }

  .laptop-image-small {
    width: 330px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    img {
      height: 100%;
      width: auto;
      object-fit: contain;
    }
  }

  .laptop-image {
    width: 100%;
    max-width: 1200px;
    height: auto;
    object-fit: contain;
    margin-top: 20px;
  }
}

@media (max-width: 1024px) {
  .laptop-section {
    padding: 40px 0;

    .laptop-header {
      gap: 40px;
    }

    .laptop-title {
      font-size: 36px;
    }

    .laptop-description {
      font-size: 20px;
    }

    .laptop-image-small {
      width: 250px;
    }
  }
}

@media (max-width: 768px) {
  .laptop-section {
    padding: 30px 0;

    .laptop-header {
      flex-direction: row;
      gap: 20px;
      margin-bottom: 30px;
      align-items: center;
    }

    .laptop-header-content {
      flex: 1;
    }

    .laptop-title {
      font-size: 24px;
      margin-bottom: 16px;
      display: block;
    }

    .laptop-description {
      font-size: 14px;
    }

    .laptop-image-small {
      width: 130px;
      height: 30px;
      flex-shrink: 0;
    }
  }
}

// Глобальные стили для скрытия/отображения элементов
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
}
</style>
