<script setup lang="ts">
import axios from "axios";

const sendRequest = () => {
  axios
    .post("http://localhost:8000/api/profile/", {
      username: "johnny",
      password: "12345678",
      email: "johnny@example.com",
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
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
