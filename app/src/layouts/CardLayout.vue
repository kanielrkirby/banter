<template>
  <div class="w-full h-full flex justify-center items-center">
    <main class="bg-secondary px-8 py-12 rounded-md flex flex-col justify-center items-center gap-8 w-[21rem] max-w-[90%]">
      <h1>{{ title }}</h1>
      <form @submit.prevent="login" class="flex flex-col gap-4 w-full items-center">
        <slot />
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
