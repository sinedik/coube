<template>
  <div class="about-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <NuxtImg
            src="/images/trucks-highway.webp"
            alt="About Hero"
            class="banner-image"
            format="webp"
            quality="100"
          />
        </div>
        <div class="banner-content-wrapper">
          <div class="banner-content">
            <h1 class="banner-title">
              {{ t("homePage.banner.title") }}
            </h1>
            <p class="banner-description">
              {{ t("homePage.banner.description") }}
            </p>
            <a href="https://platform.coube.kz/signin" class="banner-button">{{
              t("homePage.banner.button")
            }}</a>
          </div>
        </div>
      </section>

      <section class="mission-section">
        <div class="container">
          <div class="mission-header">
            <h2 class="mission-title">{{ t("aboutPage.mission.title") }}</h2>
            <!-- <a href="https://platform.coube.kz/signin" class="demo-button">{{
              t("aboutPage.mission.requestDemo")
            }}</a> -->
          </div>
          <div class="mission-content">
            <div class="mission-info">
              <p class="mission-description">
                {{ t("aboutPage.mission.description") }}
              </p>
            </div>
            <div class="mission-image">
              <NuxtImg
                src="/images/demo.webp"
                alt="About Team"
                class="interface-image"
                format="webp"
                quality="80"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="container">
          <div class="values-header">
            <h2 class="values-title">{{ t("aboutPage.values.title") }}</h2>
            <div class="values-image">
              <NuxtImg
                src="/images/trucks.webp"
                alt="About Values"
                format="webp"
                quality="80"
              />
            </div>
          </div>
          <div class="values-content">
            <p class="values-description">
              {{ t("aboutPage.values.description") }}
            </p>
            <div class="values-grid">
              <div
                class="value-item"
                v-for="(item, index) in valueItems"
                :key="index"
              >
                <div class="value-number">{{ item.number }}.</div>
                <h3 class="value-title">{{ item.title }}</h3>
                <ul class="value-list">
                  <li
                    v-for="(point, pointIndex) in item.points"
                    :key="pointIndex"
                  >
                    {{ point }}
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
            <h2 class="social-title">{{ t("aboutPage.social.title") }}</h2>
            <div class="social-links-container">
              <div class="social-links-wrapper">
                <div class="social-links-row">
                  <a
                    :href="contacts.social.tiktok"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/tiktok.webp"
                      alt="TikTok"
                      loading="lazy"
                    />
                    <span>TikTok</span>
                  </a>
                  <a
                    :href="contacts.social.facebook"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/facebook.webp"
                      alt="Facebook"
                      loading="lazy"
                    />
                    <span>Facebook</span>
                  </a>
                  <a
                    :href="contacts.social.twitter"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg src="/images/x.webp" alt="X-COM" loading="lazy" />
                    <span>X-COM</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.location.yandex"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/yandex.webp"
                      :alt="t('aboutPage.social.yandexMaps')"
                      loading="lazy"
                    />
                    <span>{{ t("aboutPage.social.yandexMaps") }}</span>
                  </a>
                  <a
                    :href="contacts.location._2gis"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/2gis.webp"
                      alt="2ГИС"
                      loading="lazy"
                    />
                    <span>2ГИС</span>
                  </a>
                  <a
                    :href="contacts.location.google"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/google-maps.png"
                      alt="Google Maps"
                      loading="lazy"
                    />
                    <span>Google Maps</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.social.telegram.channel"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/telegram.webp"
                      :alt="t('aboutPage.social.telegramChannel')"
                      loading="lazy"
                    />
                    <span>{{ t("aboutPage.social.telegramChannel") }}</span>
                  </a>
                  <a
                    :href="contacts.social.youtube"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/youtube.webp"
                      alt="Youtube"
                      loading="lazy"
                    />
                    <span>Youtube</span>
                  </a>
                </div>
                <div class="social-links-row">
                  <a
                    :href="contacts.social.linkedin"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/linkedin.webp"
                      alt="LinkedIn"
                      loading="lazy"
                    />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    :href="contacts.social.instagram"
                    target="_blank"
                    class="social-link"
                  >
                    <NuxtImg
                      src="/images/instagram.webp"
                      alt="Instagram"
                      loading="lazy"
                    />
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

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useSeo } from "~/composables/useSeo";
import { useHead } from "#app";

const { t } = useI18n();
const { getSeoConfig, getSchemaOrg } = useSeo();
const seo = getSeoConfig("about");
const schemaOrg = getSchemaOrg("about");

useHead({
  title: seo.title,
  meta: [
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    {
      property: "og:image",
      content: "https://coube.kz/images/coube-og-image.jpg",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://coube.kz/about" },
    { property: "og:site_name", content: "COUBE" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    {
      name: "twitter:image",
      content: "https://coube.kz/images/coube-og-image.jpg",
    },
    { name: "twitter:site", content: "@coube_logistics" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaOrg),
    },
  ],
});

interface ValueItem {
  number: number;
  title: string;
  points: string[];
}

const valueItems: ValueItem[] = [
  {
    number: 1,
    title: t("aboutPage.values.items.1.title"),
    points: [
      t("aboutPage.values.items.1.point1"),
      t("aboutPage.values.items.1.point2"),
    ],
  },
  {
    number: 2,
    title: t("aboutPage.values.items.2.title"),
    points: [
      t("aboutPage.values.items.2.point1"),
      t("aboutPage.values.items.2.point2"),
    ],
  },
  {
    number: 3,
    title: t("aboutPage.values.items.3.title"),
    points: [
      t("aboutPage.values.items.3.point1"),
      t("aboutPage.values.items.3.point2"),
    ],
  },
  {
    number: 4,
    title: t("aboutPage.values.items.4.title"),
    points: [
      t("aboutPage.values.items.4.point1"),
      t("aboutPage.values.items.4.point2"),
    ],
  },
  {
    number: 5,
    title: t("aboutPage.values.items.5.title"),
    points: [
      t("aboutPage.values.items.5.point1"),
      t("aboutPage.values.items.5.point2"),
    ],
  },
  {
    number: 6,
    title: t("aboutPage.values.items.6.title"),
    points: [
      t("aboutPage.values.items.6.point1"),
      t("aboutPage.values.items.6.point2"),
    ],
  },
];

const contacts = {
  social: {
    tiktok: "https://tiktok.com/@coube.kz",
    facebook: "https://facebook.com/coube.kz",
    twitter: "https://x.com/coubekz",
    telegram: {
      channel: "https://t.me/coube_logistics_platform",
    },
    youtube: "https://youtube.com/@coube_logistics?si=Rl2ZXbAIr_oQditc",
    linkedin: "https://www.linkedin.com/company/coube/",
    instagram: "https://instagram.com/coube.kz",
  },
  location: {
    yandex: "https://yandex.kz/maps/ru/-/CDwXEI8H",
    _2gis: "https://go.2gis.com/nbrkp",
    google: "https://maps.app.goo.gl/uRiT4mw8yCBeVBKGA",
  },
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
  border-radius: 24px;
  overflow: hidden;

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
  border-radius: 24px;
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
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: auto;
  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

// Адаптивность для мобильных устройств
@media (max-width: 768px) {
  .banner-section {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    margin-top: 0;
    min-height: auto;
  }

  .banner-image-container {
    position: relative;
    height: 240px;
    order: 2;
    border-radius: 24px;

    &::after {
      display: none;
    }
  }

  .banner-image {
    border-radius: 24px;
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
    margin-bottom: 16px;
    color: #000;
  }

  .banner-description {
    font-size: 16px;
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

  .demo-button {
    padding: 16px 24px;
    font-size: 16px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 460px) {
  .banner-content-wrapper {
    position: relative;
    height: auto;
    padding: 24px 0px;
    order: 1;
    background-color: #fff;
    justify-content: flex-start;
  }
  .demo-button {
    display: none;
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

@media (max-width: 460px) {
  .container {
    padding: 0px !important;
  }
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
    padding: 54px 0 0 0;
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
  background: #f4f4f4;
  padding: 32px;
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
    padding: 54px 0px 0px 0px;
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
    background-color: #f4f4f4;
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
    width: 130px;
  }

  .value-item {
    padding: 24px 16px;
  }
}

.social-section {
  padding: 54px 0;
  padding-top: 0;
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
  background-color: #f4f4f4;
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
  gap: 24px;
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
    background-color: #f4f4f4;
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
    gap: 16px;
    align-items: flex-start;
  }

  .social-links-row {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
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

@media (max-width: 460px) {
  .social-section {
    padding: 24px 16px;
    margin: 0;
    margin-bottom: 54px;
  }
}
</style>
