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
          <div class="mission-header">
            <h2 class="mission-title">Миссия компании COUBE</h2>
            <button class="demo-button">Запросить демо</button>
          </div>
          <div class="mission-content">
            <div class="mission-info">
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
          <div class="values-header">
            <h2 class="values-title">Наши ценности</h2>
            <div class="values-image">
              <img src="~/assets/trucks.png" alt="Грузовики COUBE" />
            </div>
          </div>
          <div class="values-content">
            <p class="values-description">
              {{
                "Наши ценности помогают платформе быть не просто помощником, а полноценным\nцифровым логистическим партнером, который делаетперевозки удобными\n,экономичными и безопасными."
              }}
            </p>
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
            <h2 class="social-title">Мы в соц.сетях</h2>
            <div class="social-links-container">
              <div class="social-links-wrapper">
                <div class="social-links-row">
                  <a
                    :href="contacts.social.tiktok"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/tiktok.png" alt="TikTok" />
                    <span>TikTok</span>
                  </a>
                  <a
                    :href="contacts.social.facebook"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/facebook.png" alt="Facebook" />
                    <span>Facebook</span>
                  </a>
                  <a
                    :href="contacts.social.twitter"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/x.png" alt="X-COM" />
                    <span>X-COM</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.location.yandex"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/yandex.png" alt="Яндекс карты" />
                    <span>Яндекс карты</span>
                  </a>
                  <a
                    :href="contacts.location._2gis"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/2gis.png" alt="2ГИС" />
                    <span>2ГИС</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.social.telegram.channel"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/telegram.png" alt="Telegram канал" />
                    <span>Telegram канал</span>
                  </a>
                  <a
                    :href="contacts.social.youtube"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/youtube.png" alt="Youtube" />
                    <span>Youtube</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.social.linkedin"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/linkedin.png" alt="LinkedIn" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    :href="contacts.social.instagram"
                    target="_blank"
                    class="social-link"
                  >
                    <img src="~/assets/instagram.png" alt="Instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useContactsStore } from "../stores/contactsStore";
import "swiper/css";

const contacts = useContactsStore();

const socialLinks = [
  {
    icon: "telegram.png",
    text: "Telegram\nканал",
    link: contacts.social.telegram.channel,
  },
  { icon: "youtube.png", text: "Youtube", link: contacts.social.youtube },
  { icon: "tiktok.png", text: "TikTok", link: contacts.social.tiktok },
  { icon: "instagram.png", text: "Instagram", link: contacts.social.instagram },
  { icon: "facebook.png", text: "Facebook", link: contacts.social.facebook },
  { icon: "x.png", text: "X-COM", link: contacts.social.twitter },
  { icon: "linkedin.png", text: "LinkedIn", link: contacts.social.linkedin },
  { icon: "2gis.png", text: "2ГИС", link: contacts.location._2gis },
  { icon: "yandex.png", text: "Карта", link: contacts.location.yandex },
];
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

  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

.demo-button {
  padding: 16px 51px !important;
  margin-top: 0;
  width: auto !important;
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

.mission-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 68px;
  flex-wrap: wrap;
  width: 100%;
}

.mission-content {
  display: flex;
  align-items: center;
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
  margin: 0;
  line-height: 1.2;
}

.mission-description {
  font-size: 24px;
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

.demo-button {
  background-color: #f19e22;
  color: #000;
  border: none;
  border-radius: 100px;
  padding: 16px 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  display: inline-block;
  text-align: center;
  width: 100%;
  max-width: 100%;
  padding: 16px 0;
  margin-top: 0;
  &:hover {
    background-color: darken(#f19e22, 10%);
  }
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

  .mission-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 30px;
  }

  .mission-title {
    font-size: 24px;
    margin-bottom: 0;
  }

  .mission-description {
    font-size: 14px;
  }

  .demo-button {
    padding: 16px 24px;
    font-size: 16px;
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

.values-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  width: 100%;
}

.values-content {
  width: 100%;
}

.values-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.values-description {
  font-size: 20px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 50px;
  white-space: pre-wrap;
  margin-top: 30px;
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
  padding: 32px 0;
  border-radius: 16px;
}

.value-number {
  font-size: 36px;
  font-weight: 800;
  color: #f19e22;
  margin-bottom: 16px;
}

.value-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.3;
}

.value-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;

  li {
    font-size: 22px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 8px;
    padding-left: 0;

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .values-title {
    font-size: 24px;
    margin-bottom: 0;
  }

  .values-description {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  .values-image {
    width: 130px;
    height: 30px;
    margin-left: auto;
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

  .value-list {
    li {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  .social-section {
    padding: 24px 16px;
    background-color: #f5f5f5;
    border-radius: 16px;
    margin: 16px;
  }

  .social-title {
    font-size: 24px !important;
    margin-bottom: 20px;
  }

  .social-links-container {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  }

  .social-links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .social-links-row {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #eaeaea;
    padding: 7.5px 14px;
    border-radius: 100px;
    text-decoration: none;
    color: #000;
    flex: 1;
    min-width: 0;

    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      flex-shrink: 0;
    }

    span {
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media (max-width: 480px) {
  .values-image {
    width: 100px;
  }
}

.social-section {
  padding: 54px 0;
  background-color: #fff;
}

.social-content {
  width: 100%;
}

.social-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 40px 0;
}

.social-links-container {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 40px;
}

.social-links-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.social-links-row {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  background-color: #e3e3e3;
  padding: 12px 24px;
  border-radius: 100px;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(241, 158, 34, 0.1);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 24px;
    font-weight: 500;
  }
}

@media (max-width: 1024px) {
  .social-title {
    font-size: 36px;
  }

  .social-link {
    padding: 10px 20px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
  .social-section {
    padding: 24px 16px;
    background-color: #f5f5f5;
    border-radius: 16px;
    margin: 16px;
  }

  .social-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .social-links-container {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  }

  .social-links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .social-links-row {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    margin-bottom: 0;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #eaeaea;
    padding: 7.5px 14px;
    border-radius: 100px;
    text-decoration: none;
    color: #000;
    flex: 1;
    min-width: 0;

    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      flex-shrink: 0;
    }

    span {
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
