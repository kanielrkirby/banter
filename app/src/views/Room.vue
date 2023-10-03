<template>
  <main>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <img :src="message.profile.avatar" class="w-8 h-8 rounded-full" />
        <p class="font-bold">{{ message.profile.username }}</p>
        <p>{{ message.body }}</p>
      </li>
    </ul>
    <div>
      <InputField v-model="body" type="text" />
      <button @click="postMessage">Send</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import InputField from '@/components/InputField.vue'

interface Message {
  id: number
  body: string
  profile: {
    id: number
    username: string
    avatar: string
  }
}

const route = useRoute()
const id = route.params.id

const messages = ref<Message[]>([])
const body = ref('')

async function getMessages() {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/room/${id}/messages/`, {
    withCredentials: true,
  })
  if (res.status >= 200 && res.status < 300) {
    messages.value = res.data
    console.log(res.data)
  } else {
    console.log(res)
  }
}

getMessages()

async function postMessage() {
  const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/room/${id}/messages/`, {
    body: body.value
  }, {
    withCredentials: true,
  })
  if (res.status >= 200 && res.status < 300) {
    messages.value.push(res.data)
  } else {
    console.log(res)
  }
}
</script>
