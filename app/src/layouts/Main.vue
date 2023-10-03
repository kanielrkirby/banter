<template>
  <div class="h-full relative flex flex-col overflow-hidden">
    <Header />
    <div class="w-full h-full flex">
      <List />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
</script>
