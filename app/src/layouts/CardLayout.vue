<template>
  <div class="w-full h-full flex justify-center items-center">
    <main class="bg-secondary px-8 py-12 rounded-md flex flex-col justify-center items-center gap-8 w-[24rem] max-w-[90%]">
      <h1>{{ title }}</h1>
      <form @submit.prevent="submit" class="flex flex-col gap-4 w-full items-center">
        <template v-if="error">
          <p class="text-red-500">{{ error }}</p>
        </template>
        <slot />
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

interface Props {
  title: string
  error?: string
  submit: () => void
}

const { title, error, submit } = defineProps<Props>()
</script>
