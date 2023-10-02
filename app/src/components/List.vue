<template>
  <nav>
    <ul>
      <li v-for="item in rooms" :key="item">
        <router-link :to="`/rooms/${item.id}`">
          {{ item.name }}
        </router-link>
      </li>
      <li v-for="item in friends" :key="item" class="">
        <button @click="(e) => newRoom(e, item.id)">
          {{ item.username }}
        </button>
      </li>
    </ul>
    <form @submit="addFriend">
      <InputField
        v-model="email"
        label="Email"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <button class="btn-secondary-accent" type="submit">
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
    id
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
    email: email.value,
    status: 2,
  }, {
    withCredentials: true,
  })
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
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms/`, {
    withCredentials: true,
  })
  rooms.value = response.data.results
  console.log("rooms: ", response.data.results)
}

const fetchFriends = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/friends/`, {
    withCredentials: true,
  })
  friends.value = response.data
  console.log("friends: ", response.data)
}

fetchRooms()
fetchFriends()
</script>
