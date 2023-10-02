<template>
  <nav>
    <ul>
      <li v-for="item in rooms" :key="item">
        <router-link :to="/rooms/+item.id">
          {{ item.name }}
        </router-link>
      </li>
      <li v-for="item in friends" :key="item" class="hover:after:opacity-100 after:opacity-0 after:transition-all after:duration-200 relative after:absolute after:content-['Message?'] after:inset-0 after:m-auto after:bg-black after:bg-opacity-50 after:blur-md">
        <button onsubmit="(e) => newRoom(e, item.id)">
          {{ item.name }}
        </button>
      </li>
    </ul>
    <form onsubmit="addFriend">
      <InputField
        v-model="email"
        label="Email"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <button>
        Add a friend
      </button>
    </form>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { user } from '@/stores/user'
import InputField from '@/components/InputField.vue'
import axios from 'axios'

const newRoom = async (e, id: number) => {
  e.preventDefault()
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/profile/friend-room/`, {
    id: id,
  }, {
    withCredentials: true,
  })
  const data = await response.json()
  if (response.status >= 200 && response.status < 300) {
    router.push(`/rooms/${data.id}`)
  } else {
    console.log(data)
  }
}

const email = ref('')

const addFriend = async (e) => {
  e.preventDefault()
const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/`, {
  id: email.value,
  status: 2,
}, {
  withCredentials: true,
})
  const data = await response.json()
}

interface Room {
  name: string
  id: number
}

interface Friend {
  name: string
  id: number
}

const rooms = ref<Room[]>([])
const friends = ref<Friend[]>([])

const fetchRooms = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms`, {
    withCredentials: true,
  })
  const data = await response.json()
  rooms.value = data
}

const fetchFriends = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/?status=friend`, {
    withCredentials: true,
  })
  const data = await response.json()
  friends.value = data
}

fetchRooms()
fetchFriends()
</script>
