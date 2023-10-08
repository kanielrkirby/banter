<script setup lang="ts">
import { RouterView } from 'vue-router'
import { checkAuth } from '@/stores/user'
checkAuth()
</script>

<template>
  <RouterView />
</template>

