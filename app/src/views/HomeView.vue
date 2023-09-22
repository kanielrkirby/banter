<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const sendRequest = () => {
  axios
    .get("https://localhost:8000/api/profile/", {
      method: "GET",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <main>
    <button @click="sendRequest">Send Request</button>
  </main>
</template>
