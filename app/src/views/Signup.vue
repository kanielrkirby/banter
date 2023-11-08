<template>
  <CardLayout title="Sign Up" :error="error" :submit="signup">
    <InputField v-model="username" label="Username" type="text" name="username" id="username" maxlength="40" minlength="3" required autocomplete="username" />
    <InputField v-model="email" label="Email" type="email" name="email" id="email" maxlength="40" minlength="3" required autocomplete="email" />
    <InputField v-model="password" label="Password" type="password" name="password" id="password" maxlength="40" minlength="8" required autocomplete="password" />
    <InputField v-model="confirmPassword" label="Confirm Password" type="password" name="confirm-password" id="confirm-password" maxlength="40" minlength="8" required autocomplete="password" />
    <a class="link" href="/login">Already have an account?</a>
    <button class="btn" type="submit">Sign Up</button>
  </CardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import CardLayout from '@/layouts/CardLayout.vue';
import InputField from '@/components/InputField.vue';

const router = useRouter();

const error = ref<string | undefined>()

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

async function signup() {
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup/`, {
      username: username.value,
      email: email.value,
      password: password.value,
    });

console.log(response)
    if (response.status >= 200 && response.status < 300) {
      router.push({ name: 'login' })
    }
  } catch (err) {
    error.value = "Error signing up"
    console.log(err);
  }
}
</script>

