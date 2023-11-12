<template>
  <span v-for="invite in invites" :key="invite.id">
    {{ invite.username }}
  </span>
</template>

<script setup lang="ts">
import { invites } from "@/stores/invites";
console.log("invites");
console.log(invites);
</script>
