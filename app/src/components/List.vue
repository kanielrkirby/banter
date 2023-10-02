<template>
  <nav class="w-1/3 min-w-[15rem] flex-col flex h-full justify-between">
    <ul>
      <li v-for="item in rooms" :key="item" class="rounded-md bg-secondary group hover:bg-opacity-80 transition-all duration-200 hover:scale-[102.5%]">
        <router-link :to="`/rooms/${item.id}`" class="p-4 block">
          <h4 class="font-body text-white text-opacity-80 group-hover:text-opacity-100 transition-all duration-150">
            {{ item.name }}
          </h4>
          <p class="text-white text-opacity-50 group-hover:text-opacity-70 transition-all duration-150">
            {{ item.last_message ?? "No messages yet" }}
          </p>
        </router-link>
      </li>
      <li v-for="item in friends" :key="item" class="">
        <User :user="item.id" />
        <button @click="(e) => newRoom(e, item.id)" class="">
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
