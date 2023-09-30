<template>
  <CardLayout title="Login" :error="error">
    <InputField v-model="email" label="Email" type="email" name="email" id="email" maxlength="40" minlength="8" required
      autocomplete="email" />
    <InputField v-model="password" label="Password" type="password" name="password" id="password" maxlength="40" minlength="8" required                                                                                                                                                              
      autocomplete="password" />
    <a href="/signup" class="link-primary-accent">Need an account?</a>
    <button class="btn-secondary-accent" type="submit">Login</button>
  </CardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { loginUser } from '@/stores/user';
import CardLayout from '@/layouts/CardLayout.vue';
import InputField from '@/components/InputField.vue';

const router = useRouter();

const error = ref<string | null>(null)

const email = ref('');
const password = ref('');

async function login() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login/`,
      {
        email: email.value,
        password: password.value,
      },
      {
        withCredentials: true,
      });
    console.log(response)

    if (response.status === 200) {
      loginUser(
        response.data.user
      )
      router.push({ name: 'home' });
    } else throw new Error();
  } catch (err) {
    error.value = "Error logging in"
    console.log(err);
  }
}
</script>
