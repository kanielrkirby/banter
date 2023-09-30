<template>
  <CenterCard title="Sign Up">
    <template v-if="error">
      <p>{{ error }}</p>
    </template>

    <form @submit.prevent="signup">
      <InputField v-model="username" label="Username" type="text" name="username" id="username" maxlength="40" minlength="3" required autocomplete="username" />
      <InputField v-model="email" label="Email" type="email" name="email" id="email" maxlength="40" minlength="3" required autocomplete="email" />
      <InputField v-model="password" label="Password" type="password" name="password" id="password" maxlength="40" minlength="8" required autocomplete="password" />
      <InputField v-model="confirmPassword" label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" maxlength="40" minlength="8" required autocomplete="password" />
      <Button type="submit">Sign Up</Button>
    </form>
  </CenterCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import CenterCard from '@/components/CenterCard.vue';
import InputField from '@/components/InputField.vue';
import Button from '@/components/Button.vue';

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

