<template>
  <Main>
    <main class="w-0 grow p-2 flex flex-col h-full">
      <header class="">
        <h1 class="text-2xl font-bold text-white">{{ room }}</h1>
      </header>
      <ul class="flex-col flex gap-2 overflow-y-scroll grow h-0 p-2">
        <li :class="`flex gap-2 items-center group ${message.profile.id === user.id ? '' : 'flex-row-reverse'}`"
          v-for="message in messages" :key="message.id">
          <User :id="message.profile.id" className="w-12 flex-shrink-0" />
          <div :class="`w-[70%] flex items-center ${message.profile.id === user.id ? '' : 'flex-row-reverse'}`">
            <div
              :class="`flex flex-col justify-between gap-1 ${message.profile.id === user.id ? 'items-start' : 'items-end'}`">
              <span class="text-opacity-80 text-white text-sm">{{ message.profile.username }}</span>
              <p
                :class="`rounded-2xl px-4 py-2 items-center ${message.profile.id === user.id ? 'bg-primary-light' : 'bg-secondary'}`">
                {{ message.body }}
              </p>
              <span class="text-opacity-50 text-white text-xs">{{ message.time_since ?? "..." }}</span>
            </div>
            <button @click="popup" class="w-fit h-fit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 opacity-50 hover:opacity-100 transition-all duration-150">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
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

interface Room {
  id: number
  name: string
}

const popup = () => {
  alert('Not implemented yet')
}


const route = useRoute()
const id = route.params.id

const room = ref<Room>()

;(async () => {
const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/room/${id}/`, {
  withCredentials: true,
})
if (res.status >= 200 && res.status < 300) {
  room.value = res.data
}
})()

const messages = ref<Message[]>([])
const body = ref('')

  ; (async function getMessages() {
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
  })()

  ; (function handleTimeSince() {
    const pluralize = (word: string, count: number) => {
      return `${count} ${word}${count === 1 ? '' : 's'} ago`;
    }
    const updateElapsedTime = (message: Message) => {
      const elapsedTime = Date.now() - new Date(message.created_at).getTime();
      const seconds = Math.floor(elapsedTime / 1000);
      if (seconds < 60) return pluralize('second', seconds);
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return pluralize('minute', minutes);
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return pluralize('hour', hours);
      const days = Math.floor(hours / 24);
      if (days < 7) return pluralize('day', days);
      const weeks = Math.floor(days / 7);
      if (weeks < 4) return pluralize('week', weeks);
      const months = Math.floor(weeks / 4);
      if (months < 12) return pluralize('month', months);
      const years = Math.floor(months / 12);
      return pluralize('year', years);
    }

    const updateMessages = () => {
      const _messages = messages.value
      for (let i = 0; i < _messages.length; i++) {
        _messages[i].time_since = updateElapsedTime(_messages[i])
      }
      messages.value = _messages
    }
    let interval = setInterval(updateMessages, 30000)
    setTimeout(updateMessages, 500)
    return function () {
      clearInterval(interval)
      interval = setInterval(updateMessages, 30000)
      updateMessages()
    }
  })()


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

; (async function handleSocket() {
  const socket = new WebSocket(`${import.meta.env.VITE_BACKEND_WS_URL}/ws/room/${id}/`)
  socket.onmessage = (e) => {
    const data = JSON.parse(e.data)
    data.message.time_since = "Just now"
    messages.value.push(data.message)
    setTimeout(scrollToBottom, 100)
  }
})()

defineProps({
  room: {
    type: String,
    default: 'Room',
  },
})

function scrollToBottom() {
  const chat = document.querySelector('main > ul')
  chat?.scrollTo(0, chat.scrollHeight)
}
</script>
