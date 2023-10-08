<script setup lang="ts">
import { RouterView } from 'vue-router'
import { checkAuth } from '@/stores/user'
import ContextMenu from '@/components/ContextMenu.vue'
checkAuth()
</script>

<template>
  <RouterView />
  <ContextMenu />
</template>

