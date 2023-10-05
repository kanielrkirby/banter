<template>
  <main>
    <ul>
      <li class="flex gap-2" v-for="message in messages" :key="message.id">
        <User :user="message.profile.id" />
        <div class="flex flex-col justify-between">
          <span class="text-opacity-50">{{ message.profile.username }}</span>
          <p :class="`rounded-full ${message.profile.id === user.id ? 'bg-sky-500' : 'bg-green-500'}`">
            {{ message.body }}
          </p>
          <span class="text-opacity-50">{{ message.time_since }}</span>
        </div>
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
  created_at: string
  time_since: string
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
function handleTimeSince() {
  const updateElapsedTime = (message: Message) => {
    const currentTime = Date.now();
    const messageTime = new Date(message.created_at).getTime();
    const elapsedTime = currentTime - messageTime;
    const seconds = Math.floor(elapsedTime / 1000);
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hours ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} days ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks} weeks ago`;
    }
    const months = Math.floor(weeks / 4);
    if (months < 12) {
      return `${months} months ago`;
    }
    const years = Math.floor(months / 12);
    return `${years} years ago`;
  }

  const func = () => {
    const updatedMessages = messages.value.map(message => ({
      ...message,
      time_since: updateElapsedTime(message)
    }));
    messages.value = updatedMessages;
  }

  setTimeout(func, 500);
  setInterval(func, 10000);
}
handleTimeSince()

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
