<template>
  <div class="carrier-page">
    <div class="main-container">
      <section class="banner-section">
        <!-- Мобильная версия баннера -->
        <div class="banner-mobile">
          <div class="banner-content-mobile">
            <h1 class="banner-title">
              {{ t("homePage.banner.title") }}
            </h1>
            <p class="banner-description">
              {{ t("homePage.banner.description") }}
            </p>
          </div>
          <div class="banner-image-mobile">
            <NuxtImg
              src="/images/carrier.webp"
              :alt="t('homePage.banner.title')"
              class="banner-image"
              loading="eager"
              format="webp"
              quality="80"
            />
            <div class="platform-buttons-mobile">
              <p class="platform-title">{{ t("homePage.banner.platform") }}</p>
              <div class="buttons-row">
                <a href="#" class="platform-button">
                  <NuxtImg
                    src="/images/play-orange.svg"
                    :alt="t('homePage.banner.video')"
                    loading="lazy"
                    format="webp"
                    quality="80"
                  />
                </a>
                <a href="#" class="platform-button">
                  <NuxtImg
                    src="/images/play-orange.svg"
                    :alt="t('homePage.banner.video')"
                    loading="lazy"
                    format="webp"
                    quality="80"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="mobile-app-buttons">
            <p class="download-title">{{ t("homePage.driver.downloadApp") }}</p>
            <div class="store-buttons">
              <a href="#" class="store-button">
                <NuxtImg
                  src="/images/Apple.svg"
                  :alt="t('homePage.driver.appStore')"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </a>
              <a href="#" class="store-button">
                <NuxtImg
                  src="/images/Google.svg"
                  :alt="t('homePage.driver.googlePlay')"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Десктопная версия баннера -->
        <div class="banner-desktop">
          <div class="banner-image-container">
            <NuxtImg
              src="/images/carrier.webp"
              :alt="t('homePage.banner.title')"
              class="banner-image"
              loading="eager"
              format="webp"
              quality="80"
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

              <div class="banner-buttons">
                <a
                  href="https://platform.coube.kz/signin"
                  class="banner-button"
                >
                  {{ t("homePage.banner.button") }}
                </a>
                <div class="banner-buttons-mobile">
                  <div class="download-section">
                    <p class="download-title">
                      {{ t("homePage.driver.downloadApp") }}
                    </p>
                    <div class="store-buttons">
                      <a href="#" class="store-button">
                        <NuxtImg
                          src="/images/Apple.svg"
                          :alt="t('homePage.driver.appStore')"
                          loading="lazy"
                          format="webp"
                          quality="80"
                        />
                      </a>
                      <a href="#" class="store-button">
                        <NuxtImg
                          src="/images/Google.svg"
                          :alt="t('homePage.driver.googlePlay')"
                          loading="lazy"
                          format="webp"
                          quality="80"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="platform-section">
                    <p class="platform-title">
                      {{ t("homePage.banner.platform") }}
                    </p>
                    <div class="platform-buttons">
                      <a
                        href="https://www.youtube.com/@coube_logistics"
                        target="_blank"
                        class="platform-button"
                      >
                        <NuxtImg
                          src="/images/play-orange.svg"
                          :alt="t('homePage.banner.video')"
                          loading="lazy"
                          format="webp"
                          quality="80"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/@coube_logistics"
                        target="_blank"
                        class="platform-button"
                      >
                        <NuxtImg
                          src="/images/play-orange.svg"
                          :alt="t('homePage.banner.video')"
                          loading="lazy"
                          format="webp"
                          quality="80"
                        />
                      </a>
                    </div>
                  </div>
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
                <h2 class="value-title">{{ t("driverPage.value.title") }}</h2>
              </div>
              <div class="value-image">
                <NuxtImg
                  src="/images/trucks.webp"
                  :alt="t('driverPage.value.trucksAlt')"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
            <p class="value-description">
              {{ t("driverPage.value.description") }}
            </p>
            <div class="value-grid">
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

      <section class="laptop-section desktop-only">
        <div class="container">
          <NuxtImg
            src="/images/laptop-carrier.webp"
            :alt="t('driverPage.laptop.interfaceAlt')"
            class="laptop-image"
            loading="eager"
            format="webp"
            quality="80"
          />
        </div>
      </section>

      <section class="driver-section">
        <div class="container">
          <div class="driver-content">
            <div class="driver-info">
              <div class="driver-logo">
                <NuxtImg
                  src="/images/logo-clear.svg"
                  alt="COUBE"
                  class="logo-image"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </div>
              <h2 class="driver-title">{{ t("homePage.driver.title") }}</h2>
              <p class="driver-description">
                {{ t("homePage.driver.description") }}
              </p>
              <div class="app-links desktop-only">
                <a href="#" class="app-link">
                  <NuxtImg
                    src="/images/Apple.svg"
                    :alt="t('homePage.driver.appStore')"
                    class="app-badge"
                    loading="lazy"
                    format="webp"
                    quality="80"
                  />
                </a>
                <a href="#" class="app-link">
                  <NuxtImg
                    src="/images/Google.svg"
                    :alt="t('homePage.driver.googlePlay')"
                    class="app-badge"
                    loading="lazy"
                    format="webp"
                    quality="80"
                  />
                </a>
              </div>
            </div>
            <div class="driver-phones desktop-only">
              <NuxtImg
                src="/images/phones.webp"
                :alt="t('homePage.driver.appImage')"
                class="phones-image"
                loading="lazy"
                format="webp"
                quality="80"
              />
            </div>
            <div class="driver-phones mobile-only">
              <NuxtImg
                src="/images/phones.webp"
                :alt="t('homePage.driver.appImage')"
                class="phones-image"
                loading="lazy"
                format="webp"
                quality="80"
              />
            </div>
            <div class="app-links mobile-only">
              <a href="#" class="app-link">
                <NuxtImg
                  src="/images/Apple.svg"
                  :alt="t('homePage.driver.appStore')"
                  class="app-badge"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </a>
              <a href="#" class="app-link">
                <NuxtImg
                  src="/images/Google.svg"
                  :alt="t('homePage.driver.googlePlay')"
                  class="app-badge"
                  loading="lazy"
                  format="webp"
                  quality="80"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useSeo } from "~/composables/useSeo";
import { useHead } from "nuxt/app";

const { t } = useI18n();
const { getSeoConfig, getSchemaOrg } = useSeo();
const seo = getSeoConfig("driver");
const schemaOrg = getSchemaOrg("driver");

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
    { property: "og:url", content: "https://coube.kz/driver" },
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

const valueItems = computed(() => [
  {
    number: 1,
    title: t("driverPage.value.items.1.title"),
    points: [
      t("driverPage.value.items.1.point1"),
      t("driverPage.value.items.1.point2"),
    ],
  },
  {
    number: 2,
    title: t("driverPage.value.items.2.title"),
    points: [
      t("driverPage.value.items.2.point1"),
      t("driverPage.value.items.2.point2"),
    ],
  },
  {
    number: 3,
    title: t("driverPage.value.items.3.title"),
    points: [
      t("driverPage.value.items.3.point1"),
      t("driverPage.value.items.3.point2"),
    ],
  },
  {
    number: 7,
    title: t("driverPage.value.items.7.title"),
    points: [
      t("driverPage.value.items.7.point1"),
      t("driverPage.value.items.7.point2"),
    ],
  },
  {
    number: 5,
    title: t("driverPage.value.items.5.title"),
    points: [
      t("driverPage.value.items.5.point1"),
      t("driverPage.value.items.5.point2"),
    ],
  },
  {
    number: 6,
    title: t("driverPage.value.items.6.title"),
    points: [
      t("driverPage.value.items.6.point1"),
      t("driverPage.value.items.6.point2"),
    ],
  },
  {
    number: 8,
    title: t("driverPage.value.items.8.title"),
    points: [
      t("driverPage.value.items.8.point1"),
      t("driverPage.value.items.8.point2"),
    ],
  },
  {
    number: 9,
    title: t("driverPage.value.items.9.title"),
    points: [
      t("driverPage.value.items.9.point1"),
      t("driverPage.value.items.9.point2"),
    ],
  },
]);
</script>

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
  min-height: 560px;
}

.banner-mobile {
  display: none;
  flex-direction: column;
  width: 100%;
}

.banner-content-mobile {
  background-color: #fff;
  padding: 24px 16px;
  order: 1;
}

@media (max-width: 460px) {
  .banner-content-mobile {
    padding: 24px 0px;
  }
}

.banner-image-mobile {
  position: relative;
  height: 240px;
  order: 2;
  overflow: hidden;
  border-radius: 24px;

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

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.banner-desktop {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
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

.banner-buttons {
  flex-direction: row;
  gap: 24px;
  margin-top: 45px;
}

.banner-buttons-mobile {
  display: flex;
  margin-top: 28px;
  /* flex-direction: column; */
  gap: 24px;
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

.banner-button {
  background-color: #f19e22;
  color: #000;
  border: none;
  border-radius: 100px;
  padding: 16px 36px;
  width: 100%;
  max-width: 240px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: darken(#f19e22, 10%);
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

@media (max-width: 1024px) {
  .banner-title {
    font-size: 36px;
  }

  .banner-description {
    font-size: 20px;
  }

  .banner-buttons {
    margin-top: 120px;
  }
}

@media (max-width: 768px) {
  .banner-section {
    margin-top: 0;
  }

  .banner-mobile {
    display: flex;
  }

  .banner-desktop {
    display: none;
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

@media (max-width: 460px) {
  .container {
    padding: 0px !important;
  }
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
  white-space: pre;
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
  background: #f4f4f4;
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
  white-space: normal;
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
    white-space: inherit;
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

@media (max-width: 460px) {
  .value-item {
    padding: 24px 16px;
  }

  .value-section {
    padding: 20px 0;
  }
}

.driver-section {
  padding: 40px 0px;
  background-color: #f4f4f4;
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
  justify-content: space-around;
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

  .banner-button {
    width: 100%;
    max-width: 100%;
    padding: 16px 0;
    margin-top: 0;
    display: inline-block;
    text-decoration: none;
    text-align: center;
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

.platform-buttons-mobile {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .platform-title {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  .buttons-row {
    display: flex;
    gap: 16px;
  }

  .platform-button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
    }
  }
}

.mobile-app-buttons {
  padding: 16px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 24px;
  order: 3;

  .download-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #000;
    text-align: center;
  }

  .store-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  .store-button {
    height: 45px;

    img {
      height: 100%;
      width: auto;
    }
  }
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
  margin-top: 0;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

@media (max-width: 460px) {
  .value-header {
    align-items: flex-start;
    margin-bottom: 16px;
  }
  .value-description {
    margin-bottom: 20px;
    margin-top: 0;
  }
  .driver-section {
    background-color: transparent;
    padding-top: 0;
  }

  .banner-description {
    margin-bottom: 0px;
    margin-top: 16px;
  }
}
</style>
