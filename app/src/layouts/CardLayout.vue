<template>
  <div class="w-full h-full flex justify-center items-center">
    <main class="bg-secondary p-8 rounded-md flex flex-col">
      <h1>{{ title }}</h1>
      <slot />
    </main>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const title = ref('', { required: true })
</script>
