<template>
  <span v-for="conversation in conversations.value">
    {{ conversation.name }}
  </span>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";
</script>
