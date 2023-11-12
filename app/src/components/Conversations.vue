<template v-for="conversation in conversations">
  <span>
    {{ conversation.name }}
  </span>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";
</script>
