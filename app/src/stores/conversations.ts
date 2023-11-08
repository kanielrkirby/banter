// conversations.ts

import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { socket } from './socket'

interface Room {
  id: number
  name: string
  lastMessage: string
}

export const conversations = ref<Room[]>([])

;(async function fetchRooms() {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms/`, {
    withCredentials: true,
  })
  if (response.status !== 200) {
    throw new Error('Unable to fetch rooms')
  }
  conversations.value = response.data
})()

socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  if (data.type === 'conversations') {
    conversations.value = data.conversations
  }
})
