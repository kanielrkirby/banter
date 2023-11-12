<template>
  <span v-for="conversation in conversations">
    {{ conversation.name }}
  </span>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";
</script>
