<template>
  <div class="bg-black">
    <main>
      <h1>{{ title }}</h1>
      <slot></slot>
    </main>
  </div>
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
