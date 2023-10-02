<template>
  <nav>
    <ul>
      <li v-for="item in rooms" :key="item">
        <router-link :to="/rooms/+item.id">
          {{ item.name }}
        </router-link>
      </li>
      <li v-for="item in friends" :key="item" class="hover:after:opacity-100 after:opacity-0 after:transition-all after:duration-200 relative after:absolute after:content-['Message?'] after:inset-0 after:m-auto after:bg-black after:bg-opacity-50 after:blur-md">
        <button onsubmit="() => submit(item.id)">
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

const submit = async (id: number) => {
// Create a new room with user
//  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms/`, {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify({
//      id,
//    }),
//  })
}

const email = ref('')

const addFriend = async (e) => {
  // Add a friend
  e.preventDefault()
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: email.value,
      status: 2,
    }),
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
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile/rooms`)
  const data = await response.json()
  rooms.value = data
}

const fetchFriends = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile/relations/?status=friend`)
  const data = await response.json()
  friends.value = data
}

fetchRooms()
fetchFriends()
</script>
