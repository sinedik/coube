<template>
  <div class="carrier-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <img
            src="~/assets/carrier.png"
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
              <div class="download-section">
                <p class="download-title">Скачать приложение для водителя</p>
                <div class="store-buttons">
                  <a href="#" class="store-button">
                    <img
                      src="~/assets/Apple.svg"
                      alt="Download on the App Store"
                    />
                  </a>
                  <a href="#" class="store-button">
                    <img
                      src="~/assets/Google.svg"
                      alt="Get it on Google Play"
                    />
                  </a>
                </div>
              </div>
              <div class="platform-section">
                <p class="platform-title">Ознакомьтесь с платформой</p>
                <div class="platform-buttons">
                  <a href="#" class="platform-button">
                    <img src="~/assets/play-orange.svg" alt="Смотреть видео" />
                  </a>
                  <a href="#" class="platform-button">
                    <img src="~/assets/play-orange.svg" alt="Смотреть видео" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="value-section">
        <div class="container">
          <div class="value-content">
            <div class="value-header">
              <div class="value-header-content">
                <h2 class="value-title">Ценность для перевозчика</h2>
                <p class="value-description">
                  Упрощаем поиск заказов и оформление документов для выполнения
                  грузоперевозок
                </p>
              </div>
              <div class="value-image">
                <img src="~/assets/trucks.png" alt="Грузовики COUBE" />
              </div>
            </div>
            <div class="value-grid">
              <div class="value-item">
                <div class="value-number">1.</div>
                <h3 class="value-title">Постоянный доступ к заказам</h3>
                <ul class="value-list">
                  <li>
                    Большая база грузов — можно быстро находить заказы без
                    посредников.
                  </li>
                  <li>
                    Возможность выбора оптимальных маршрутов и рейсов для
                    максимальной загрузки транспорта.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">2.</div>
                <h3 class="value-title">
                  Быстрая оплата без ожидания (факторинг)
                </h3>
                <ul class="value-list">
                  <li>
                    Возможность получить деньги сразу после выполнения рейса, не
                    дожидаясь платежей от заказчиков.
                  </li>
                  <li>
                    Устранение кассовых разрывов и стабильность финансовых
                    потоков.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">3.</div>
                <h3 class="value-title">Снижение простоя и пустых пробегов</h3>
                <ul class="value-list">
                  <li>
                    Алгоритмы подбора грузов помогают минимизировать холостые
                    пробеги.
                  </li>
                  <li>
                    Возможность комбинировать грузы и маршруты для повышения
                    эффективности.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">7.</div>
                <h3 class="value-title">Упрощение документооборота</h3>
                <ul class="value-list">
                  <li>
                    Электронные документы, цифровые подписи, автоматизированная
                    отчетность.
                  </li>
                  <li>
                    Быстрое оформление заявок, контрактов и закрывающих
                    документов.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">5.</div>
                <h3 class="value-title">Быстрая и гарантированная оплата</h3>
                <ul class="value-list">
                  <li>Прозрачные тарифы, понятные условия оплаты.</li>
                  <li>
                    Возможность моментального вывода средств или гарантированные
                    выплаты без задержек.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">6.</div>
                <h3 class="value-title">Гибкость и удобство работы</h3>
                <ul class="value-list">
                  <li>
                    Можно работать с любым количеством заказов в удобное время.
                  </li>
                  <li>
                    Доступ к платформе через мобильное приложение или
                    веб-кабинет.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">8.</div>
                <h3 class="value-title">
                  Безопасность и надежность сотрудничества
                </h3>
                <ul class="value-list">
                  <li>Проверенные заказчики, снижение рисков мошенничества.</li>
                  <li>
                    Возможность страхования груза и получения юридической
                    поддержки.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">9.</div>
                <h3 class="value-title">Поддержка и консультации</h3>
                <ul class="value-list">
                  <li>Круглосуточная техническая и клиентская поддержка.</li>
                  <li>
                    Информационная поддержка по законодательству и транспортным
                    нормам.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laptop-section">
        <div class="container">
          <img
            src="~/assets/laptop-carrier.png"
            alt="Интерфейс COUBE для перевозчиков"
            class="laptop-image"
          />
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

<script setup></script>

<style lang="scss" scoped>
.carrier-page {
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
  min-height: 600px;
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
  max-width: 600px;
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

.banner-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
}

.download-section,
.platform-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.download-title,
.platform-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.store-buttons,
.platform-buttons {
  display: flex;
  gap: 16px;
}

.store-button {
  height: 40px;

  img {
    height: 100%;
    width: auto;
  }
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

@media (max-width: 768px) {
  .banner-section {
    height: auto;
    min-height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 24px 24px;
    margin-top: 0;
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

  .banner-buttons {
    margin-top: 24px;
    gap: 16px;
  }

  .download-title,
  .platform-title {
    font-size: 14px;
  }

  .store-button {
    height: 32px;
  }

  .platform-button {
    width: 40px;
    height: 40px;
    border-radius: 8px;

    img {
      width: 20px;
      height: 20px;
    }
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
  padding: 0 40px;
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
  margin-bottom: 60px;
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
  font-size: 20px;
  line-height: 1.5;
  color: #333;
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
  padding: 24px;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffa500;
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
  font-size: 24px;
  font-weight: 700;
  color: #ffa500;
  margin-bottom: 16px;
}

.value-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 8px;
    position: relative;
    padding-left: 16px;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ffa500;
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

  .value-image {
    width: 250px;
  }

  .value-grid {
    grid-template-columns: repeat(2, 1fr);
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
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }

  .value-header-content {
    max-width: 100%;
  }

  .value-title {
    font-size: 32px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .value-description {
    font-size: 14px;
    line-height: 1.4;
  }

  .value-image {
    width: 130px;
    height: 30px;
    margin-left: auto;
    order: -1;
    position: absolute;
    right: 16px;
    top: 0;
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

@media (max-width: 480px) {
  .value-image {
    width: 100px;
  }
}

.laptop-section {
  padding: 80px 0;
  width: 100%;
  background-color: #fff;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .laptop-image {
    width: 100%;
    max-width: 1200px;
    height: auto;
    object-fit: contain;
  }
}

.driver-section {
  padding: 40px 0px;
  background-color: #f5f5f5;
  border-radius: 24px;
  margin-bottom: 80px;
  width: 100%;
  box-sizing: border-box;
}

.driver-section .container {
  padding: 0;
  box-sizing: border-box;
}

.driver-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}

.driver-info {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
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
  word-break: break-word;
}

.driver-description {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: center;
  word-break: break-word;
}

.app-links {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.app-link {
  display: block;
  min-width: 180px;
  max-width: 100%;
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

  .driver-title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .driver-description {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .driver-phones {
    max-width: 100%;
    margin: 32px 0;
  }
}

@media (max-width: 768px) {
  .driver-section {
    margin-bottom: 40px;
    border-radius: 16px;
  }

  .driver-logo {
    width: 60px;
    height: 70px;
    margin-bottom: 16px;
  }

  .app-link {
    min-width: 140px;
  }
}

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
</style>
