<template>
  <div>
    <Header />
    <List />
    <slot></slot>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import List from "@/components/List.vue";
</script>
