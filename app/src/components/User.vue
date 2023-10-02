<template>
  <!-- Image with fallback SVG -->
  <img class="w-16 h-16 overflow-hidden rounded-md" v-if="user.avatar" :src="user.avatar" :alt="user.name" />
  <div class="w-16 h-16 overflow-hidden rounded-md">
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <rect width="500" height="500" :fill="bg" />
      <circle cx="250" cy="158" r="104" :fill="color" />
      <path d="M72 413C72 340.651 130.651 282 203 282H298C370.349 282 429 340.651 429 413V457C429 459.209 427.209 461 425 461H76C73.7909 461 72 459.209 72 457V413Z" :fill="color" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { user } from '@/stores/user'

const { color } = defineProps({
  color: {
    type: String,
    default: '#444444',
  },
})

const bg = computed(() => {
  const luminance = getLuminance(color)
  return `${luminance < 0.5 ? '#eeeeee' : '#222222'}`
})

function getLuminance(hex: string) {
  const rgb = hexToRgb(hex)
  return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace('#', ''), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}
</script>
