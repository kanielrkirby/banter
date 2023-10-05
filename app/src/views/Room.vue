<template>
  <main>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <User />
        <p class="font-bold">{{ message.profile.username }}</p>
        <p>{{ message.body }}</p>
      </li>
    </ul>
    <div>
      <InputField v-model="body" type="text" name="body" placeholder="Send a message" />
      <button @click="postMessage">Send</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import InputField from '@/components/InputField.vue'
import User from '@/components/User.vue'
import { user } from '@/stores/user'

interface Message {
  id: number
  body: string
  profile: {
    id: number
    username: string
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
    body.value = ''
  } else {
    console.log(res)
  }
}

async function handleSocket() {
  const socket = new WebSocket(`${import.meta.env.VITE_BACKEND_WS_URL}/ws/room/${id}/`)
  socket.onmessage = (e) => {
    const data = JSON.parse(e.data)
    messages.value.push(data.message)
  }
}

handleSocket()
</script>
