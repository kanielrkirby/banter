<template>
  <router-link to="/profile" :class="`hover:scale-105 transition-all duration-150 relative ${className}`">
    <div :class="`absolute -translate-y-1/3 -translate-x-1/3 z-50 w-1/4 h-1/4 rounded-sm ${
                 profile.status === 'online' ? 'bg-green-500' :
                  profile.status === 'busy' ? 'bg-red-500' :
                  'bg-gray-500'
                 }`">
    </div>
    <img class="w-full aspect-square overflow-hidden rounded-md" v-if="user.avatar" :src="user.avatar" :alt="user.name" />
    <div class="w-full aspect-square overflow-hidden rounded-md" v-else>
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect width="500" height="500" :fill="bg" />
        <circle cx="250" cy="158" r="104" :fill="color" />
        <path
          d="M72 413C72 340.651 130.651 282 203 282H298C370.349 282 429 340.651 429 413V457C429 459.209 427.209 461 425 461H76C73.7909 461 72 459.209 72 457V413Z"
          :fill="color" />
      </svg>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { user } from '@/stores/user'
import { defineProps } from 'vue'
import { ref } from 'vue'

type Profile = {
  id: string
  username: string
  status: 'online' | 'offline' | 'busy'
}

const profile = ref({} as Profile)


const { color, id, className } = defineProps({
  color: {
    type: String,
    default: '#444444',
  },
  className: {
    type: String,
    default: 'w-16',
  },
  id: {
    type: String,
    required: true,
  },
})

const fetchProfile = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile/${id}/`, {
    method: 'GET',
    credentials: 'include',
  })

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json()
    profile.value = data
  }
}

fetchProfile()

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
