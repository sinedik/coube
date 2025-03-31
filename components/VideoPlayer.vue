<template>
  <div class="video-player" ref="videoContainer">
    <video
      ref="videoElement"
      class="video-player__element"
      :poster="posterUrl"
      v-bind="options"
      @loadedmetadata="onLoadedMetadata"
      @canplay="onCanPlay"
    >
      <source :src="currentVideoUrl" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
    <div v-if="loading" class="video-player__loader">
      <div class="video-player__loader-content">
        <img
          :src="posterUrl"
          :alt="options?.alt || 'Video thumbnail'"
          class="video-player__poster"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useNuxtApp } from "#app";

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: () => ({
      autoplay: false,
      muted: true,
      loop: false,
      playsinline: true,
      preload: "none",
      loading: "lazy",
    }),
  },
});

const videoElement = ref(null);
const videoContainer = ref(null);
const loading = ref(true);
const isIntersecting = ref(false);
const currentVideoUrl = ref(props.videoUrl);

const { $videoCache } = useNuxtApp();

// Кэш для предзагруженных видео
const videoCache = new Map();

// Функция для предзагрузки видео
const preloadVideo = async (url) => {
  // Проверяем кэш
  const cachedUrl = await $videoCache.get(url);
  if (cachedUrl) {
    return cachedUrl;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return await $videoCache.set(url, blob);
  } catch (error) {
    console.error("Error preloading video:", error);
    return url;
  }
};

const onLoadedMetadata = () => {
  if (videoElement.value) {
    videoElement.value.playbackRate = 0.8;
  }
};

const onCanPlay = () => {
  loading.value = false;
  if (props.options.autoplay && isIntersecting.value) {
    videoElement.value?.play().catch((error) => {
      console.error("Error playing video:", error);
    });
  }
};

// Используем useIntersectionObserver для отслеживания видимости
const { stop } = useIntersectionObserver(
  videoContainer,
  ([{ isIntersecting: intersecting }]) => {
    isIntersecting.value = intersecting;

    if (intersecting && videoElement.value) {
      // Пытаемся воспроизвести видео при появлении в области видимости
      if (props.options.autoplay) {
        videoElement.value.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }
  },
  { threshold: 0.1 }
);

onMounted(() => {
  // Устанавливаем начальные значения при монтировании
  if (videoElement.value) {
    videoElement.value.load();
  }
});

onUnmounted(() => {
  stop();
  // Очищаем кэш при размонтировании компонента
  videoCache.forEach((url) => URL.revokeObjectURL(url));
  videoCache.clear();
});
</script>

<style lang="scss" scoped>
.video-player {
  border-radius: 24px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__element {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__loader-content {
    width: 100%;
    height: 100%;
  }

  &__poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
