<template>
  <main>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <img :src="message.user.avatar" class="w-8 h-8 rounded-full" />
        <p class="font-bold">{{ message.user.username }}</p>
        <p>{{ message.content }}</p>
      </li>
    </ul>
    <div></div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

interface Message {
  id: number
  content: string
  user: {
    id: number
    username: string
    avatar: string
  }
}

const route = useRoute()
const id = route.params.id

const messages = ref<Message[]>([])

async function getMessages() {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/room/${id}/messages/`, {
    withCredentials: true,
  })
  if (res.status >= 200 && res.status < 300) {
    messages.value = res.data
  } else {
    console.log(res)
  }
}

getMessages()
</script>
