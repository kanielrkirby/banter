<template>
  <main>
    <h1>Login</h1>

    <Fragment v-if="error">
      <p>{{ error }}</p>
    </Fragment>

    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" id="username" maxlength="40" minlength="3" required
        autocomplete="username" />

      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" maxlength="40" minlength="8" required
        autocomplete="current-password" />

      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { loginUser } from '@/stores/user';

const router = useRouter();

const error = ref<string | null>(null)

const username = ref('');
const password = ref('');

async function login() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login/`,
    {
      username: username.value,
      password: password.value,
    },
    {
      withCredentials: true,
    });
    console.log(response)

    if (response.status === 200) {
      loginUser({
        username: username.value,
        id: response.data.id,
      })
      router.push({ name: 'home' });
    } else throw new Error();
  } catch (err) {
    error.value = "Error logging in"
    console.log(err);
  }
}
</script>
