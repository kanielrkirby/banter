<template>
  <CenterCard title="Login">

    <Fragment v-if="error">
      <p>{{ error }}</p>
    </Fragment>

    <form @submit.prevent="login">

      <InputField v-model="email" type="email" name="email" id="email" maxlength="40" minlength="8" required
        autocomplete="email" />

      <InputField v-model="password" type="password" name="password" id="password" maxlength="40" minlength="8" required
        autocomplete="password" />

      <Button type="submit">Login</Button>
    </form>
  </CenterCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { loginUser } from '@/stores/user';
import CenterCard from '@/components/CenterCard.vue';
import InputField from '@/components/InputField.vue';
import Button from '@/components/Button.vue';

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
