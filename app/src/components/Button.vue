<template>
  <button class="btn-secondary-accent">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
})
</script>

