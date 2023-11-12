<template>
  <div v-for="profile in invites" :key="profile.id">
    <h4>
      {{ profile.username }}
    </h4>
    <span>
      {{ profile.invite_sent_at.toDate().toLocaleDateString() }}
    </span>
    <p>
      {{ profile.username }} wants to be your friend!
    </p>
  </div>
</template>

<script setup lang="ts">
import { invites } from "@/stores/invites";
</script>
