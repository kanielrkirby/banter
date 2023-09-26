<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const password = ref('');

async function login() {
  try {
    const response = await axios.post('http://localhost:8000/api/token/', {
      username: username.value,
      password: password.value,
    });

    if (response.status === 200) {
      console.log('Logged in successfully:', response.data);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" id="username" maxlength="40" minlength="3" required autocomplete="username" />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" maxlength="40" minlength="8" required
        autocomplete="current-password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>
