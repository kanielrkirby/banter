<template>
  <template v-if="profileId">
    ...
  </template>
  <template v-else>
    <form @submit.prevent="submit">
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <User :id="profileId" />
      <InputField v-model="email" label="Email" />
      <InputField v-model="username" label="Username" />
      <InputField v-model="password" label="Password" type="password" />
      <InputField v-model="passwordConfirmation" label="Password Confirmation" type="password" />
      <button type="submit" class="mt-4">
        Submit
      </button>
    </form>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import InputField from '@/components/InputField.vue'

const { profileId} = defineProps({
  profileId: {
    type: String,
    required: true
  }
})

const error = ref<string>()

const email = ref('')
const username = ref('')
const password = ref('')
const passwordConfirmation = ref('')

;(async function getFormInfo() {
  try {
    const { data } = await axios.get(`/api/profile/${profileId}`)
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
    await axios.post('/api/profile', {
      username: username.value,
      password: password.value ?? undefined,
    })
  } catch (e) {
    error.value = e.response.data.message
  }
}

</script>
