<template>
  <header class="w-full flex justify-between p-4">
    <Settings />
    <Logo />
    <User />
  </header>
</template>

<script setup lang="ts">
import Settings from "@/components/Settings.vue";
import Logo from "@/components/Logo.vue";
import User from "@/components/User.vue";
</script>
