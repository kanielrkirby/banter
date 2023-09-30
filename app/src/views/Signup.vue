<template>
  <CardLayout title="Sign Up">

    <template v-if="error">
      <Status error >
        <p>{{ error }}</p>
      </Status>
    </template>

    <form @submit.prevent="signup">
      <InputField v-model="username" label="Username" type="text" name="username" id="username" maxlength="40" minlength="3" required autocomplete="username" />
      <InputField v-model="email" label="Email" type="email" name="email" id="email" maxlength="40" minlength="3" required autocomplete="email" />
      <InputField v-model="password" label="Password" type="password" name="password" id="password" maxlength="40" minlength="8" required autocomplete="password" />
      <InputField v-model="confirmPassword" label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" maxlength="40" minlength="8" required autocomplete="password" />

      <a class="link-primary-accent" href="/login">Already have an account?</a>

      <button class="btn-secondary-accent" type="submit">Sign Up</button>
    </form>
  </CardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import CardLayout from '@/layouts/CardLayout.vue';
import InputField from '@/components/InputField.vue';

const router = useRouter();

const error = ref<string | null>(null)

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

    if (response.status === 200) {
      router.push({ name: 'login' })
    }
  } catch (err) {
    error.value = "Error signing up"
    console.log(err);
  }
}
</script>

