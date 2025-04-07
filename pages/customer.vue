<template>
  <div class="customer-page">
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
              src="/images/customer.webp"
              alt="Customer Hero"
              class="banner-image"
              format="webp"
              quality="100"
            />
            <div class="platform-buttons-mobile">
              <p class="platform-title">{{ t("homePage.banner.platform") }}</p>
              <div class="buttons-row">
                <a href="#" class="platform-button">
                  <NuxtImg
                    src="/images/play-orange.svg"
                    :alt="t('homePage.banner.video')"
                    loading="lazy"
                  />
                </a>
                <a href="#" class="platform-button">
                  <NuxtImg
                    src="/images/play-orange.svg"
                    :alt="t('homePage.banner.video')"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Десктопная версия баннера -->
        <div class="banner-desktop">
          <div class="banner-image-container">
            <NuxtImg
              src="/images/customer.webp"
              alt="Customer Hero"
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
              <div class="banner-buttons">
                <a
                  href="https://platform.coube.kz/signin"
                  class="banner-button"
                >
                  {{ t("homePage.banner.button") }}
                </a>
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
                      />
                    </a>
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
                <h2 class="value-title">{{ t("customerPage.value.title") }}</h2>
              </div>
              <div class="value-image">
                <NuxtImg
                  src="/images/trucks.webp"
                  alt="Customer Benefits"
                  class="customer-benefits__image"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
            <p class="value-description">
              {{ t("customerPage.value.description") }}
            </p>
            <div class="value-grid">
              <div
                class="value-item"
                v-for="(item, index) in valueItems"
                :key="index"
              >
                <div class="value-number">{{ index + 1 }}.</div>
                <h3 class="value-title">
                  {{ t(item.title) }}
                </h3>
                <ul class="value-list">
                  <li
                    v-for="(point, pointIndex) in item.points"
                    :key="pointIndex"
                  >
                    {{ t(point) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laptop-section">
        <div class="container">
          <div class="laptop-content">
            <div class="laptop-header">
              <div class="laptop-header-content">
                <h2 class="laptop-title">
                  {{ t("customerPage.management.title") }}
                </h2>
              </div>
              <div class="laptop-image-small">
                <NuxtImg
                  src="/images/trucks.webp"
                  alt="Customer App"
                  class="customer-app__image"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
            <p class="laptop-description">
              {{ t("customerPage.management.description") }}
            </p>
            <NuxtImg
              src="/images/laptop-customer.webp"
              :alt="t('customerPage.management.interfaceAlt')"
              class="laptop-image"
              loading="lazy"
            />
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
const { getSeoConfig } = useSeo();
const seo = getSeoConfig("customer");

useHead({
  title: seo.title,
  meta: [
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: "/images/coube-og-image.jpg" },
  ],
});

const valueItems = computed(() => [
  {
    title: "customerPage.value.items.1.title",
    points: [
      "customerPage.value.items.1.point1",
      "customerPage.value.items.1.point2",
    ],
  },
  {
    title: "customerPage.value.items.2.title",
    points: [
      "customerPage.value.items.2.point1",
      "customerPage.value.items.2.point2",
    ],
  },
  {
    title: "customerPage.value.items.3.title",
    points: [
      "customerPage.value.items.3.point1",
      "customerPage.value.items.3.point2",
    ],
  },
  {
    title: "customerPage.value.items.4.title",
    points: [
      "customerPage.value.items.4.point1",
      "customerPage.value.items.4.point2",
    ],
  },
  {
    title: "customerPage.value.items.5.title",
    points: [
      "customerPage.value.items.5.point1",
      "customerPage.value.items.5.point2",
    ],
  },
  {
    title: "customerPage.value.items.6.title",
    points: [
      "customerPage.value.items.6.point1",
      "customerPage.value.items.6.point2",
    ],
  },
  {
    title: "customerPage.value.items.7.title",
    points: [
      "customerPage.value.items.7.point1",
      "customerPage.value.items.7.point2",
    ],
  },
  {
    title: "customerPage.value.items.8.title",
    points: [
      "customerPage.value.items.8.point1",
      "customerPage.value.items.8.point2",
    ],
  },
  {
    title: "customerPage.value.items.9.title",
    points: [
      "customerPage.value.items.9.point1",
      "customerPage.value.items.9.point2",
    ],
  },
]);
</script>

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
  /* max-height: 54px; */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

.banner-buttons {
  display: flex;
  gap: 24px;
  margin-top: 128px;
  align-items: flex-end;
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
    padding: 24px 16px;
  }

  .container {
    padding: 0px !important;
  }

  .value-section {
    padding: 26px 0;
  }

  .value-header {
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .value-description {
    margin-bottom: 20px;
    margin-top: 0;
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

  .laptop-content {
    width: 100%;
  }

  .laptop-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    margin-bottom: 24px;
    width: 100%;
  }

  .laptop-header-content {
    flex: 1;
    max-width: 600px;
  }

  .laptop-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.2;
    text-align: left;
    white-space: nowrap;
  }

  .laptop-description {
    font-size: 24px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 40px;
    text-align: left;
    white-space: pre;
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
      margin-bottom: 16px;
      align-items: center;
    }

    .laptop-header-content {
      flex: 1;
    }

    .laptop-title {
      font-size: 24px;
      margin-bottom: 0;
      display: block;
      white-space: normal !important;
    }

    .laptop-description {
      font-size: 14px;
      margin-bottom: 24px;
    }

    .laptop-image-small {
      width: 130px;
      height: 30px;
      flex-shrink: 0;
    }
  }
}

@media (max-width: 460px) {
  .laptop-section {
    padding: 0px 0;
  }

  .laptop-header {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .laptop-header-content {
    flex: 1;
    max-width: 100%;
  }

  .laptop-title {
    font-size: 24px;
    margin-bottom: 0;
    white-space: normal !important;
  }

  .laptop-description {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 24px;
    white-space: normal;
  }

  .laptop-image-small {
    width: 130px;
    height: 30px;
    flex-shrink: 0;
    margin-left: auto;
  }

  .laptop-image {
    margin-top: 0;
  }
}

// Глобальные стили для скрытия/отображения элементов
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
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

@media (max-width: 460px) {
  .banner-content-mobile {
    padding: 24px 0px;
  }
  .banner-description {
    margin-bottom: 0px;
    margin-top: 16px;
  }
}

@media (max-width: 460px) {
  .laptop-section {
    padding: 0px 0;
  }
  .laptop-description {
    white-space: unset !important;
  }
}
</style>
