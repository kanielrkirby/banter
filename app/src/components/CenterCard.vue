<template>
  <main>
    <h1>{{ title }}</h1>
    <slot></slot>
  </main>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
