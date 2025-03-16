<template>
  <div id="app">
    <app-header />
    <NuxtPage />
    <app-footer />
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<style lang="scss">
@use "@/assets/scss/main.scss";
</style>
