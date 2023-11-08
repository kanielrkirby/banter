<template>
  <Sidebar />
  <div class="flex">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar.vue";
//import Conversations from "@/components/Conversations.vue";
</script>
