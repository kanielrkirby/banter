<template>
  <nav class="w-1/3 min-w-[15rem] flex-col flex h-full justify-between items-center">
    <ul class="w-full flex flex-col gap-1 overflow-y-scroll h-0 grow overflow-x-hidden">
      <template v-for="item in rooms" :key="item.id">
        <li
          class="context-menu-anchor rounded-md bg-primary-faded group hover:bg-opacity-80 transition-all duration-200 hover:scale-[102.5%]">
          data-context-
          <router-link :to="`/room/${item.id}`" class="p-4 block space-y-2">
            <h4
              class="font-heading-secondary text-white text-opacity-80 group-hover:text-opacity-100 transition-all duration-150 text-base">
              {{ item.name }}
            </h4>
            <p
              class="text-sm text-white text-opacity-50 group-hover:text-opacity-70 transition-all duration-150 max-w-[40ch] text-ellipsis">
              {{ item.last_message ?? "No messages yet" }}
            </p>
          </router-link>
          <context-menu @select="handleSelect" :divided="true">
            <context-menu-item :select="editRoom" :disabled="true">Edit</context-menu-item>
            <context-menu-item :select="deleteRoom" :disabled="true">Delete</context-menu-item>
            <context-menu-item :select="leaveRoom" :disabled="true">Leave</context-menu-item>
          </context-menu>
        </li>
      </template>
      <template v-for="item in friends" :key="item.id">
        <li
          class="rounded-md bg-primary-faded group hover:bg-opacity-80 transition-all duration-200 hover:scale-[102.5%]">
          <button @click="(e) => newRoom(e, item.id)" class="p-4 flex gap-2">
            <User :user="item.id" />
            <div class="flex flex-col gap-2">
              <h4
                class="w-fit font-heading-secondary text-white text-opacity-80 group-hover:text-opacity-100 transition-all duration-150 text-base">
                {{ item.username }}
              </h4>
            </div>
          </button>
          <context-menu @select="handleSelect" :divided="true">
            <context-menu-item :select="blockUser">Block</context-menu-item>
            <context-menu-item :select="unfriendUser">Unfriend</context-menu-item>
            <context-menu-item :select="createNewRoomWith">New Room!</context-menu-item>
          </context-menu>
        </li>
      </template>
    </ul>
    <form @submit="addFriend" class="flex flex-col gap-2 w-full items-center p-2">
      <InputField v-model="email" label="Email" type="text" name="email" id="email" placeholder="Email" required />
      <button class="btn-secondary-accent w-fit" type="submit">
        Add a friend
      </button>
    </form>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputField from '@/components/InputField.vue'
import axios from 'axios'
import User from '@/components/User.vue'
import { useRouter } from 'vue-router'
import { 
  blockUser, 
  editRoom, 
  unfriendUser, 
  deleteRoom, 
  leaveRoom, 
  createNewRoomWith
} from "@/utils/actions"

function handleSelect(action: string) {
  console.log(action)
}

const router = useRouter()

const newRoom = async (e: Event, id: number) => {
  e.preventDefault()
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/profile/friend-room/`, {
    id
  }, {
    withCredentials: true,
  })

  if (response.status >= 200 && response.status < 300) {
    router.push(`/rooms/${response.data.id}`)
  } else {
  }
}

const email = ref('')

const addFriend = async (e: Event) => {
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
  last_message: string
}

interface Friend {
  username: string
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
