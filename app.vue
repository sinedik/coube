<template>
  <div id="app">
    <app-header />
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <app-footer />
    <NoScript>
      <div class="noscript-warning">
        Для полноценной работы сайта требуется JavaScript. Пожалуйста, включите
        его в настройках вашего браузера.
      </div>
    </NoScript>
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

useHead({
  link: [
    // Предзагрузка критических ресурсов
    {
      rel: "preload",
      href: "/images/banner.webp",
      as: "image",
      type: "image/webp",
      fetchpriority: "high",
    },
    {
      rel: "preload",
      href: "/fonts/inter.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
  ],
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";

.noscript-warning {
  display: block;
  background-color: #ff5252;
  color: white;
  padding: 15px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
