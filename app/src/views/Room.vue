<template>
  <Main>
    <main class="w-0 grow p-2 flex flex-col h-full">
      <header class="">
        <h1 class="text-2xl font-bold text-white">{{ room }}</h1>
      </header>
      <ul class="flex-col flex gap-2 overflow-y-scroll grow h-0">
        <li :class="`flex gap-2 items-center ${message.profile.id === user.id ? '' : 'flex-row-reverse'}`"
          v-for="message in messages" :key="message.id">
          <User :user="message.profile.id" className="w-12 flex-shrink-0" />
          <div
            :class="`flex flex-col justify-between gap-1 ${message.profile.id === user.id ? 'items-start' : 'items-end'}`">
            <span class="text-opacity-80 text-white text-sm">{{ message.profile.username }}</span>
            <p :class="`rounded-2xl px-4 py-2 max-w-[60%] items-center ${message.profile.id === user.id ? 'bg-primary-light' : 'bg-secondary'}`">
              {{ message.body }}
            </p>
            <span class="text-opacity-50 text-white text-xs">{{ message.time_since ?? "..." }}</span>
          </div>
        </li>
      </ul>
      <form @submit.prevent="postMessage" class="items-center gap-4 bg-primary p-4 rounded-lg flex">
        <InputField v-model="body" type="text" name="body" placeholder="Send a message" />
        <button type="submit" class="btn-accent">Send</button>
      </form>
    </main>
  </Main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import InputField from '@/components/InputField.vue'
import User from '@/components/User.vue'
import { user } from '@/stores/user'
import Main from '@/layouts/Main.vue'

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

const room = ref('')

const route = useRoute()
const id = route.params.id

const messages = ref<Message[]>([])
const body = ref('')

async function getMessages() {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/room/${id}/messages/`, {
    withCredentials: true,
  })
  if (res.status >= 200 && res.status < 300) {
    const reversedData = res.data.reverse()
    messages.value = reversedData
    setTimeout(scrollToBottom, 100)
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
    scrollToBottom()
  }
}

handleSocket()

defineProps({
  room: {
    type: String,
    default: 'Room',
  },
})

function scrollToBottom() {
  const chat = document.querySelector('main')
  chat?.scrollTo(0, chat.scrollHeight)
}
</script>
