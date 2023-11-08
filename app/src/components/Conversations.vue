<template v-for="conversation of conversations.value">
  <span>
    {{ conversation.name }}
  </span>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";
</script>
