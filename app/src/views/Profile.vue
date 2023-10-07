<template>
  <Main>
    <main class="flex flex-col bg-primary rounded-lg p-8 grow gap-8 items-center">
      <template v-if="profileId">
        <h1 class="text-4xl">Profile</h1>
        ...
      </template>
      <template v-else>
        <h1 class="text-4xl">My Profile</h1>
        <form @submit.prevent="submit" class="flex flex-col gap-2 max-w-[80%] w-[30rem] items-center">
          <p v-if="error" class="text-red-500">{{ error }}</p>
          <!--<User :id="profileId" class="" />-->
          <InputField v-model="email" label="Email" />
          <InputField v-model="username" label="Username" />
          <InputField v-model="password" label="Password" type="password" />
          <InputField v-model="passwordConfirmation" label="Password Confirmation" type="password" />
          <TextAreaField v-model="bio" label="Bio" />
          <button type="submit" class="mt-4 btn-accent w-fit">
            Submit
          </button>
        </form>
      </template>
    </main>
  </Main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import InputField from '@/components/InputField.vue'
import User from '@/components/User.vue'
import Main from '@/layouts/Main.vue'
import { useRoute } from 'vue-router'
import TextAreaField from '@/components/TextAreaField.vue'
import { user } from '@/stores/user'

const route = useRoute()
const profileId = route?.params?.id

const error = ref<string>()

const email = ref('')
const username = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const bio = ref('')

  ; (async function getFormInfo() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/${profileId ?? "self"}/`, {
        withCredentials: true,
      })
      email.value = data.email
      username.value = data.username
    } catch (e) {
      error.value = e.response.data.message
    }
  })()

const submit = async (e: Event) => {
  e.preventDefault()
  if (password.value !== passwordConfirmation.value) {
    error.value = 'Passwords do not match'
    return
  } else error.value = undefined

  try {
    const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/profile/${profileId ?? "self"}/`, {
      username: username.value || undefined,
      password: password.value || undefined,
      email: email.value || undefined,
    }, {
      withCredentials: true,
    })
    user.value = {
      ...user.value,
      ...data,
    }
  } catch (e) {
    error.value = e.response.data.message
  }
}

</script>
