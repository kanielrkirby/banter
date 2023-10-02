<template>
  <nav>
    <ul>
      <li v-for="item in listItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const listItems = ref(['Item 1', 'Item 2', 'Item 3'])
</script>
