// conversations.ts

import { ref } from 'vue'
import axios from 'axios'
import { socket } from './socket'

interface Room {
  id: number
  name: string
  lastMessage: string
}

interface Friend {
  id: number
  username: string
  avatar: string
}

export const conversations = ref<Room[]>([])

export const friends = ref<Friend[]>([])

;(async function fetchRooms() {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms/`, {
    withCredentials: true,
  })
  if (response.status !== 200) {
    throw new Error('Unable to fetch rooms')
  }
  conversations.value = response.data.results
})()

;(async function fetchFriends() {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/?status=1`, {
    withCredentials: true,
  })
  if (response.status !== 200) {
    throw new Error('Unable to fetch friends')
  }
  friends.value = response.data.results
})()

socket.addEventListener('message', (e: MessageEvent) => {
  const data = JSON.parse(e.data)
  if (data.type === 'conversations') {
    conversations.value = data.conversations
  }
})
