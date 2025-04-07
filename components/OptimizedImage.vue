<template>
  <div
    :class="[
      'aspect-ratio-container',
      aspectRatio ? `aspect-ratio-${aspectRatio}` : '',
      className,
    ]"
  >
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="isLCP ? 'eager' : 'lazy'"
      :fetchpriority="isLCP ? 'high' : 'auto'"
      :quality="quality"
      format="webp"
      :modifiers="modifiers"
      :preload="isLCP"
      :placeholder="placeholder"
      class="aspect-ratio-content"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  aspectRatio: {
    type: String,
    default: null,
    validator: (value: string) => ["16-9", "4-3", "1-1"].includes(value),
  },
  isLCP: {
    type: Boolean,
    default: false,
  },
  quality: {
    type: [Number, String],
    default: 80,
  },
  className: {
    type: String,
    default: "",
  },
  modifiers: {
    type: Object,
    default: () => ({}),
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const isLoaded = ref(false);
const hasError = ref(false);

const handleLoad = () => {
  isLoaded.value = true;
};

const handleError = () => {
  hasError.value = true;
};
</script>

<style scoped>
.aspect-ratio-container {
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
}

.aspect-ratio-16-9 {
  padding-top: 56.25%; /* 16:9 */
}

.aspect-ratio-4-3 {
  padding-top: 75%; /* 4:3 */
}

.aspect-ratio-1-1 {
  padding-top: 100%; /* 1:1 */
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
