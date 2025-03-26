<template>
  <div class="about-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <img
            src="~/assets/trucks-highway.png"
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
            <button class="banner-button">Подключиться</button>
          </div>
        </div>
      </section>

      <section class="mission-section">
        <div class="container">
          <div class="mission-content">
            <div class="mission-info">
              <h2 class="mission-title">Миссия компании COUBE</h2>
              <p class="mission-description">
                Наша миссия — «Обеспечить прозрачность, эффективность и удобство
                грузоперевозок за счет цифровых технологий, объединяя
                грузоотправителей и перевозчиков на одной платформе. Мы
                стремимся оптимизировать логистические процессы, снижать
                затраты, повышать скорость доставки и обеспечивать надежность
                каждого рейса»....
              </p>
            </div>
            <div class="mission-image">
              <img
                src="~/assets/demo.png"
                alt="Интерфейс платформы COUBE"
                class="interface-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="container">
          <div class="values-content">
            <div class="values-header">
              <div class="values-header-content">
                <h2 class="values-title">Наши ценности</h2>
                <p class="values-description">
                  Наши ценности помогают платформе быть не просто помощником, а
                  полноценным цифровым логистическим партнером, который делает
                  перевозки удобными, экономичными и безопасными.
                </p>
              </div>
              <div class="values-image">
                <img src="~/assets/trucks.png" alt="Грузовики COUBE" />
              </div>
            </div>
            <div class="values-grid">
              <div class="value-item">
                <div class="value-number">1.</div>
                <h3 class="value-title">Прозрачность и доверие</h3>
                <ul class="value-list">
                  <li>
                    Открытая система ценообразования и прозрачные условия работы
                    для всех участников.
                  </li>
                  <li>
                    Полный контроль за процессом перевозки в режиме реального
                    времени.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">2.</div>
                <h3 class="value-title">Эффективность и оптимизация</h3>
                <ul class="value-list">
                  <li>
                    Автоматизация поиска грузов и транспорта для снижения
                    издержек.
                  </li>
                  <li>
                    Интеллектуальная маршрутизация для минимизации пустых
                    пробегов и сокращения сроков доставки.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">3.</div>
                <h3 class="value-title">Технологичность и инновации</h3>
                <ul class="value-list">
                  <li>
                    Использование передовых IT-решений, AI и Big Data для
                    прогнозирования спроса, оптимизации загрузки и маршрутов.
                  </li>
                  <li>
                    Интеграция с ERP и CRM-системами клиентов для удобного
                    управления логистикой.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">4.</div>
                <h3 class="value-title">Ориентированность на клиента</h3>
                <ul class="value-list">
                  <li>
                    Гибкие решения для разных типов грузоотправителей и
                    перевозчиков.
                  </li>
                  <li>
                    Удобные инструменты для отслеживания, коммуникации и
                    документооборота.
                  </li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">5.</div>
                <h3 class="value-title">Безопасность и надежность</h3>
                <ul class="value-list">
                  <li>Проверка перевозчиков и контроль качества услуг.</li>
                  <li>Онлайн страхование грузов защита от форс-мажоров.</li>
                </ul>
              </div>
              <div class="value-item">
                <div class="value-number">6.</div>
                <h3 class="value-title">Партнерство и сотрудничество</h3>
                <ul class="value-list">
                  <li>
                    Создание комфортных условий работы для всех участников
                    экосистемы.
                  </li>
                  <li>
                    Выстраивание долгосрочных отношений с клиентами и
                    партнерами.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="social-section">
        <div class="container">
          <div class="social-content">
            <div class="social-header">
              <h2 class="social-title">Мы в соц.сетях</h2>
              <div class="scroll-buttons">
                <button
                  class="scroll-button prev"
                  @click="swiperRef?.slidePrev()"
                >
                  <img src="~/assets/arrow-left.svg" alt="Предыдущие" />
                </button>
                <button
                  class="scroll-button next"
                  @click="swiperRef?.slideNext()"
                >
                  <img src="~/assets/arrow-right.svg" alt="Следующие" />
                </button>
              </div>
            </div>
            <Swiper
              :modules="[Navigation]"
              :slides-per-view="'auto'"
              :space-between="24"
              @swiper="onSwiper"
              class="social-links"
            >
              <SwiperSlide class="social-item">
                <img src="~/assets/telegram.png" alt="Telegram" />
                <span>Telegram<br />канал</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/youtube.png" alt="Youtube" />
                <span>Youtube</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/tiktok.png" alt="TikTok" />
                <span>TikTok</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/instagram.png" alt="Instagram" />
                <span>Instagram</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/facebook.png" alt="Facebook" />
                <span>Facebook</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/x.png" alt="X-COM" />
                <span>X-COM</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/linkedin.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/2gis.png" alt="2ГИС" />
                <span>2ГИС</span>
              </SwiperSlide>
              <SwiperSlide class="social-item">
                <img src="~/assets/yandex.png" alt="Яндекс Карты" />
                <span>Карта</span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
</script>

<style lang="scss" scoped>
.about-page {
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

  .banner-button {
    width: 100%;
    max-width: 100%;
    padding: 16px 0;
    margin-top: 0;
  }
}

.mission-section {
  padding: 80px 0;
  width: 100%;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px;
  box-sizing: border-box;
}

.mission-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
}

.mission-info {
  flex: 1;
  max-width: 600px;
}

.mission-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 40px 0;
  line-height: 1.2;
}

.mission-description {
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  color: #333;
}

.mission-image {
  flex: 1;
  max-width: 600px;
}

.interface-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .mission-content {
    flex-direction: column;
    gap: 40px;
  }

  .mission-info,
  .mission-image {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .mission-section {
    padding: 40px 0;
  }

  .container {
    padding: 0 16px;
  }

  .mission-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .mission-description {
    font-size: 14px;
  }

  .mission-content {
    gap: 24px;
  }
}

.values-section {
  padding: 80px 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}

.values-content {
  width: 100%;
}

.values-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
  margin-bottom: 60px;
}

.values-header-content {
  flex: 1;
  max-width: 600px;
}

.values-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.values-description {
  font-size: 20px;
  line-height: 1.5;
  color: #333;
}

.values-image {
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.value-item {
  background: #f5f5f5;
  padding: 24px;
  border-radius: 16px;
}

.value-number {
  font-size: 24px;
  font-weight: 700;
  color: #ffa500;
  margin-bottom: 16px;
}

.value-title {
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
  .values-header {
    gap: 40px;
  }

  .values-image {
    width: 250px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .values-section {
    padding: 40px 0;
  }

  .values-header {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }

  .values-header-content {
    max-width: 100%;
  }

  .values-title {
    font-size: 32px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .values-description {
    font-size: 14px;
    line-height: 1.4;
  }

  .values-image {
    width: 130px;
    height: 30px;
    margin-left: auto;
    order: -1;
    position: absolute;
    right: 0;
    top: 0;
  }

  .values-grid {
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

  .value-title {
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
  .values-image {
    width: 100px;
  }
}

.social-section {
  padding: 80px 0;
  background-color: #fff;
}

.social-content {
  width: 100%;
}

.social-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.social-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
}

.scroll-buttons {
  display: flex;
  gap: 16px;
}

.scroll-button {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* border-color: #ffa500;
    background: #ffa500; */

    img {
      /* filter: brightness(0) invert(1);
      opacity: 1; */
    }
  }

  &.prev {
    img {
      opacity: 0.5;
    }

    &:hover img {
      opacity: 1;
    }
  }

  &.next {
    /* background: #ffa500;
    border-color: #ffa500; */

    img {
      /* filter: brightness(0) invert(1); */
    }
  }

  img {
    width: 54px;
    height: 54px;
    transition: all 0.3s ease;
  }
}

.social-links {
  width: 100%;
  padding: 8px 0;
}

:deep(.swiper-slide) {
  width: auto;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
  text-align: center;
  width: auto;
  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 12px;
    border-radius: 16px;
  }

  span {
    font-size: 14px;
    line-height: 1.2;
    white-space: pre-line;
  }
}

@media (max-width: 768px) {
  .social-section {
    padding: 40px 0;
  }

  .social-header {
    margin-bottom: 24px;
  }

  .social-title {
    font-size: 32px;
  }

  .scroll-button {
    width: 40px;
    height: 40px;
  }

  .social-item {
    img {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
      border-radius: 12px;
    }

    span {
      font-size: 12px;
    }
  }
}
</style>
