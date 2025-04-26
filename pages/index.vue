<template>
  <div class="home-page">
    <div class="main-container">
      <section class="banner-section">
        <div class="banner-image-container">
          <ClientOnly>
            <a
              :href="t('common.video.url')"
              target="_blank"
              class="banner__video-link"
            >
              <VideoPlayer
                :video-url="bannerVideo"
                :poster-url="bannerPoster"
                :options="{
                  autoplay: true,
                  muted: true,
                  loop: true,
                  playsinline: true,
                  preload: 'auto',
                }"
                class="banner-video"
              />
            </a>
          </ClientOnly>
          <div class="astana-hub-logo desktop-only">
            <NuxtImg
              src="/images/astana-hub.webp"
              :alt="t('footer.astanaHub.alt')"
              loading="lazy"
            />
          </div>
          <div class="astana-hub-logo mobile-only">
            <NuxtImg
              src="/images/astana-hub.webp"
              :alt="t('footer.astanaHub.alt')"
              loading="lazy"
            />
          </div>
          <div class="platform-buttons-mobile">
            <p class="platform-title">{{ t("homePage.banner.platform") }}</p>
            <div class="buttons-row">
              <a
                :href="t('common.video.url')"
                target="_blank"
                class="platform-button"
              >
                <NuxtImg
                  src="/images/play-orange.svg"
                  alt="Play"
                  class="hero__play-icon"
                  format="webp"
                  quality="80"
                />
              </a>
            </div>
          </div>
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
                >{{ t("homePage.banner.button") }}</a
              >
              <div class="platform-section">
                <p class="platform-title">
                  {{ t("homePage.banner.platform") }}
                </p>
                <div class="platform-buttons">
                  <a
                    :href="t('common.video.url')"
                    target="_blank"
                    class="platform-button"
                  >
                    <NuxtImg
                      src="/images/play-orange.svg"
                      alt="Play"
                      class="hero__play-icon"
                      format="webp"
                      quality="80"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="container">
          <div class="about-header">
            <div class="about-title-block">
              <h2 class="about-title">{{ t("homePage.about.title") }}</h2>
            </div>
            <div class="about-image-block">
              <div class="about-image-container">
                <NuxtImg
                  src="/images/trucks.webp"
                  alt="Trucks"
                  class="hero__image"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
            <div class="about-description-block">
              <div class="about-description">
                <p>
                  {{ t("homePage.about.description") }}
                </p>
              </div>
            </div>
          </div>

          <div class="features-grid">
            <div
              class="feature-item"
              v-for="(feature, index) in features"
              :key="index"
            >
              <p class="feature-text">
                {{ feature }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="steps-section">
        <div class="container">
          <div class="steps-header">
            <h2 class="steps-title">{{ t("homePage.steps.title") }}</h2>
            <div class="role-switcher">
              <button
                class="role-button"
                :class="{ active: activeRole === 'customer' }"
                @click="setActiveRole('customer')"
              >
                {{ t("homePage.steps.roles.customer") }}
              </button>
              <button
                class="role-button"
                :class="{ active: activeRole === 'executor' }"
                @click="setActiveRole('executor')"
              >
                {{ t("homePage.steps.roles.executor") }}
              </button>
            </div>
          </div>

          <div
            class="steps-diagram"
            v-if="activeRole === 'customer' && !isMobile"
          >
            <div class="steps-column left">
              <div class="step-item left">
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[0] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[2] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[4] }}</p>
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
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[1] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[3] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content step customer-step">
                  <p>{{ customerSteps[5] }}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="steps-diagram mobile-steps"
            v-if="activeRole === 'customer' && isMobile"
          >
            <div class="mobile-steps-container">
              <div
                class="step-item"
                v-for="(step, index) in customerSteps"
                :key="'mobile-customer-' + index"
              >
                <div class="step-content">
                  <p>{{ step }}</p>
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
                <div class="step-content step executor-step">
                  <p>{{ executorSteps[0] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content step executor-step">
                  <p>{{ executorSteps[2] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item left">
                <div class="step-content step executor-step">
                  <p>{{ executorSteps[4] }}</p>
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
                <div class="step-content step executor-step">
                  <p>{{ executorSteps[1] }}</p>
                </div>
              </div>
              <div class="step-spacer"></div>
              <div class="step-item right">
                <div class="step-content step executor-step">
                  <p>{{ executorSteps[3] }}</p>
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
              <div
                class="step-item"
                v-for="(step, index) in executorSteps"
                :key="'mobile-executor-' + index"
              >
                <div class="step-content">
                  <p>{{ step }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="drivers-section">
        <div class="container">
          <div class="drivers-content">
            <div class="drivers-info">
              <h2 class="drivers-title">{{ t("homePage.driver.title") }}</h2>
              <p class="drivers-description">
                {{ t("homePage.driver.description") }}
              </p>
              <div class="app-links">
                <a
                  href="https://apps.apple.com/us/app/coube-driver/id6743764010"
                  target="_blank"
                  class="app-link"
                >
                  <NuxtImg
                    src="/images/Apple.svg"
                    :alt="t('homePage.driver.appStore')"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.coube&pcampaignid=web_share"
                  target="_blank"
                  class="app-link"
                >
                  <NuxtImg
                    src="/images/Google.svg"
                    :alt="t('homePage.driver.googlePlay')"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div class="drivers-image">
              <NuxtImg
                src="/images/phones.webp"
                alt="Phones"
                class="hero__phones"
                format="webp"
                quality="80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSeo } from "~/composables/useSeo";
import { useHead } from "nuxt/app";

const { t } = useI18n();
const { getSeoConfig } = useSeo();
const seo = getSeoConfig("home");

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
    { property: "og:url", content: "https://coube.kz" },
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
});

const activeRole = ref("customer");
const isMobile = ref(false);
const customerStepsDots = ref<{ position: number }[]>([]);
const executorStepsDots = ref<{ position: number }[]>([]);
const customerFirstDotPosition = ref(0);
const customerLastDotPosition = ref(0);
const executorFirstDotPosition = ref(0);
const executorLastDotPosition = ref(0);
const videoModalVisible = ref(false);
const bannerVideo = "/images/banner-trucks.mp4";
const bannerPoster = "/images/banner.webp";

const features = [
  t("homePage.about.features.0"),
  t("homePage.about.features.1"),
  t("homePage.about.features.2"),
  t("homePage.about.features.3"),
  t("homePage.about.features.4"),
  t("homePage.about.features.5"),
];

const customerSteps = [
  t("homePage.steps.customer.0"),
  t("homePage.steps.customer.1"),
  t("homePage.steps.customer.2"),
  t("homePage.steps.customer.3"),
  t("homePage.steps.customer.4"),
  t("homePage.steps.customer.5"),
];

const executorSteps = [
  t("homePage.steps.executor.0"),
  t("homePage.steps.executor.1"),
  t("homePage.steps.executor.2"),
  t("homePage.steps.executor.3"),
  t("homePage.steps.executor.4"),
];

const setActiveRole = (role: string) => {
  activeRole.value = role;
  nextTick(() => {
    calculateStepsPositions();
  });
};

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const calculateStepsPositions = () => {
  const stepsDiagram = document.querySelector(".steps-diagram");
  if (!stepsDiagram) return;

  const customerSteps = stepsDiagram.querySelectorAll(".customer-step");
  const executorSteps = stepsDiagram.querySelectorAll(".executor-step");
  const customerDots: { position: number }[] = [];
  const executorDots: { position: number }[] = [];

  if (activeRole.value === "customer") {
    customerSteps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      const diagramRect = stepsDiagram.getBoundingClientRect();
      const position = rect.top - diagramRect.top + rect.height / 2;
      customerDots.push({ position });
    });

    customerStepsDots.value = customerDots.sort(
      (a, b) => a.position - b.position
    );
    if (customerDots.length > 0) {
      customerFirstDotPosition.value = customerDots[0].position;
      customerLastDotPosition.value =
        customerDots[customerDots.length - 1].position;
    }
  } else if (activeRole.value === "executor") {
    executorSteps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      const diagramRect = stepsDiagram.getBoundingClientRect();
      const position = rect.top - diagramRect.top + rect.height / 2;
      executorDots.push({ position });
    });

    executorStepsDots.value = executorDots.sort(
      (a, b) => a.position - b.position
    );
    if (executorDots.length > 0) {
      executorFirstDotPosition.value = executorDots[0].position;
      executorLastDotPosition.value =
        executorDots[executorDots.length - 1].position;
    }
  }
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener("resize", checkIsMobile);
  nextTick(() => {
    calculateStepsPositions();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkIsMobile);
});

function openVideoModal() {
  videoModalVisible.value = true;
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  videoModalVisible.value = false;
  document.body.classList.remove("modal-open");
}
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
  /* overflow-x: hidden; */
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
  background: #000; // Фон до загрузки видео

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
}

.banner-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
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

.container {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0 40px;
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
  color: #fff;
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
  display: inline-block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: darken(#ffa500, 10%);
  }
}

.platform-buttons-mobile {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 20;
  display: none;
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
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    margin-top: 0;
  }

  .banner-image-container {
    position: relative;
    height: 240px;
    order: 2;
    border-radius: 24px;

    video {
      border-radius: 24px;
    }

    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      border-radius: 24px;
    }
  }

  .platform-buttons-mobile {
    display: flex;
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
  }

  .platform-section {
    display: none;
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

@media (max-width: 460px) {
  .container {
    padding: 0px !important;
  }

  .banner-content-wrapper {
    padding: 24px 0px;
  }

  .banner-title {
    font-size: 24px;
  }

  .banner-description {
    margin-bottom: 0px;
    margin-top: 16px;
  }

  .banner-buttons {
    margin-top: 16px;
  }

  .platform-buttons-mobile {
    bottom: 12px;
    left: 12px;
  }
}

// Стили для секции "О нас"
.about-section {
  padding: 80px 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.about-section .container {
  padding: 0px;
  box-sizing: border-box;
}

.about-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 60px;
  width: 100%;
  gap: 130px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
}

.about-title-block {
  flex-shrink: 0;
  width: auto;
  padding-top: 8px;
}

.about-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

.about-image-block {
  flex-shrink: 0;
  margin-left: 0;
  padding-top: 8px;
}

.about-image-container {
  width: 330px;
  height: 80px;
  overflow: hidden;
  border-radius: 50px;
  max-width: 100%;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
}

.about-description-block {
  flex: 1;
  margin-left: 40px;
}

.about-description {
  font-size: 24px;
  line-height: 1.5;
  text-align: right;

  p {
    margin: 0;
    white-space: normal;
    word-break: normal;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
}

.feature-item {
  position: relative;
  padding: 20px;
  border-radius: 12px;
  background-color: transparent;
  min-height: 80px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: transform 0.3s ease;

  &:hover {
    /* transform: scale(1.02); */

    .feature-text {
      /* color: $primary-color; */
    }

    &::before {
      background-color: $primary-color;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 4em;
    background-color: #333;
    border-radius: 12px;
    transition: background-color 0.3s ease;
  }
}

.feature-text {
  margin: 0;
  padding-left: 16px;
  font-size: 24px;
  font-weight: 400;
  word-break: break-word;
  line-height: 1.4;
  transition: color 0.3s ease;
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
    margin-left: 0;
  }

  .about-image-container {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 40px 0;
  }

  .about-section .container {
    padding: 0 16px;
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
    height: 40px;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .about-description-block {
    width: 100%;
  }

  .about-description {
    font-size: 14px;
    line-height: 1.4;
    text-align: left;
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

@media (max-width: 480px) {
  .about-image-container {
    width: 150px;
  }
}

// Стили для секции "Простые шаги платформы"
.steps-section {
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.steps-section .container {
  padding: 0px;
  box-sizing: border-box;
}

.steps-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

.steps-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  word-break: break-word;
}

.role-switcher {
  display: flex;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  min-width: 360px;
  max-width: 450px;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;
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
  white-space: nowrap;

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
  width: 100%;
  box-sizing: border-box;

  &.mobile-steps {
    padding: 35px !important;
    min-height: auto !important;
    margin: 0 !important;
    border-radius: 32px !important;
    box-sizing: border-box;

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
  box-sizing: border-box;

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
  width: 100%;
  box-sizing: border-box;

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
  width: 455px;
  height: auto;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

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
    white-space: normal;
    word-break: normal;
    max-width: 100%;
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
@media (max-width: 1200px) {
  .step-content {
    width: 280px;

    p {
      font-size: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .steps-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .steps-title {
    margin-bottom: 0;
  }

  .role-switcher {
    width: 100%;
    max-width: 360px;
  }

  .step-content {
    width: 240px;

    p {
      font-size: 18px;
    }
  }
}

@media (max-width: 900px) {
  .step-content {
    width: 200px;
    padding: 15px 20px;

    p {
      font-size: 16px;
    }
  }
}

@media (max-width: 768px) {
  .steps-section {
    padding: 40px 0;
  }

  .steps-section .container {
    padding: 0 16px;
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
  box-sizing: border-box;

  .mobile-steps-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    gap: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .step-item {
    margin-bottom: 0;
    position: relative;
    width: 100%;
    box-sizing: border-box;

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
    box-sizing: border-box;

    p {
      text-align: center;
      margin: 0;
      color: white;
      font-size: 16px;
      font-weight: 500;
      white-space: normal;
      word-break: break-word;
    }
  }
}

// Адаптивность для мобильных устройств с маленьким экраном
@media (max-width: 480px) {
  .mobile-steps {
    padding: 20px !important;

    .mobile-steps-container {
      padding: 0;
    }

    .step-content {
      padding: 12px;

      p {
        font-size: 14px;
      }
    }
  }
}

// Стили для секции "Для водителя"
.drivers-section {
  padding: 40px 0px;
  background-color: #f4f4f4;
  border-radius: 24px;
  margin-bottom: 80px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 70px;
}

.drivers-section .container {
  padding: 0;
  box-sizing: border-box;
}

.drivers-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box;
}

.drivers-info {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.drivers-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  text-align: center;
  word-break: break-word;
}

.drivers-description {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 64px;
  text-align: center;
  word-break: break-word;
}

.app-links {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
  }
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

.drivers-image {
  max-width: 50%;
}

.app-preview-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

// Адаптивность для секции "Для водителя"
@media (max-width: 1024px) {
  .drivers-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .drivers-info {
    max-width: 100%;
    margin-bottom: 0;
    align-items: center;
    width: 100%;
  }

  .drivers-image {
    max-width: 80%;
    margin: 30px 0;
    order: 2;
  }

  .drivers-title {
    font-size: 36px;
  }

  .drivers-description {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .drivers-section {
    padding: 40px 16px;
    border-radius: 0;
    margin-bottom: 0;
    background-color: transparent;
    margin-top: 4px;
  }

  .drivers-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .drivers-description {
    font-size: 14px;
    margin-bottom: 0;
  }

  .drivers-image {
    max-width: 100%;
    margin: 24px 0;
  }

  .app-link {
    max-width: 140px;
    min-width: 140px;
  }

  .app-links {
    justify-content: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .app-link {
    max-width: 120px;
    min-width: 120px;
  }
}

// Стили для секций, кроме баннера
.about-section .container,
.steps-section .container,
.driver-section .container {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  box-sizing: border-box;
}

.astana-hub-logo {
  position: absolute;
  z-index: 20;
  padding: 24px;
  border-radius: 12px;

  img {
    width: 150px;
    height: auto;
  }

  &.desktop-only {
    top: 24px;
    right: 24px;
  }

  &.mobile-only {
    bottom: 16px;
    right: 16px;
    padding: 16px;

    img {
      width: 150px;
    }
  }
}

@media (max-width: 1024px) {
  .astana-hub-logo {
    padding: 20px;

    img {
      /* width: 110px; */
    }
  }

  .astana-hub-logo.desktop-only {
    top: 20px;
    right: 20px;
  }
}

@media (max-width: 768px) {
  .banner-image-container {
    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
  }

  .astana-hub-logo.desktop-only {
    display: none;
  }

  .astana-hub-logo.mobile-only {
    bottom: 16px;
    right: 16px;
    padding: 16px;

    img {
      width: 100px;
    }
  }
}

@media (max-width: 480px) {
  .banner-image-container {
    &::after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
  }

  .astana-hub-logo.mobile-only {
    bottom: 0px;
    right: 12px;
    padding: 12px;

    img {
      width: 90px;
    }
  }
}

@media (min-width: 769px) {
  .astana-hub-logo.mobile-only {
    display: none;
  }
}
</style>
