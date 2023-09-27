<template>
  <main>
    <h1>Sign Up</h1>

    <Fragment v-if="error">
      <p>{{ error }}</p>
    </Fragment>

    <form @submit.prevent="signup">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" id="username" maxlength="40" minlength="3" required
        autocomplete="username" />

      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" maxlength="40" minlength="8" required
        autocomplete="password" />

      <label for="confirmPassword">Confirm Password</label>
      <input v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword" maxlength="40"
        minlength="8" required autocomplete="password" />

      <button type="submit">Sign Up</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const error = ref<string | null>(null)

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

async function signup() {
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}}/api/profile/`, {
      username: username.value,
      password: password.value,
    });

    if (response.status === 200) {
      router.push({ name: 'login' })
    }
  } catch (err) {
    error.value = "Error signing up"
  }
}
</script>

