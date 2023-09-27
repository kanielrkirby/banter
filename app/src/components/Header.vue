<template>
  <header class="app-header">
    <nav class="navbar">
      <p>
        You're currently logged in as {{ user.username || "Guest" }}
      </p>
      <a href="/" class="logo">MyApp</a>
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { user } from "@/stores/user";
</script>
