<template>
  <nav class="w-1/3 min-w-[15rem] flex-col flex h-full justify-between items-center">
    <ul class="w-full flex flex-col gap-1 overflow-y-scroll h-0 grow overflow-x-hidden">
      <li v-for="item in rooms" :key="item.id"
        class="context-menu-anchor rounded-md bg-primary-faded group hover:bg-opacity-80 transition-all duration-200 hover:scale-[102.5%]"
        @contextmenu.prevent.stop="handleClickRoom($event, item)">
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
      </li>
      <li v-for="item in friends" :key="item.id"
        class="rounded-md bg-primary-faded group hover:bg-opacity-80 transition-all duration-200 hover:scale-[102.5%]"
        @contextmenu.prevent.stop="handleClickFriend($event, item)">
        <button @click="(e) => newRoom(e, item.id)" class="p-4 flex gap-2">
          <User :id="item.id" />
          <div class="flex flex-col gap-2">
            <h4
              class="w-fit font-heading-secondary text-white text-opacity-80 group-hover:text-opacity-100 transition-all duration-150 text-base">
              {{ item.username }}
            </h4>
          </div>
        </button>
      </li>
    </ul>
    <vue-simple-context-menu element-id="room-list-context-menu" :options="roomActions" ref="roomContextMenu"
      @option-clicked="executeActionRoom" />
    <vue-simple-context-menu element-id="friend-list-context-menu" :options="friendActions" ref="friendContextMenu"
      @option-clicked="executeActionFriend" />
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
import actions, {
  blockUser,
  editRoom, // 2
  unfriendUser,
  deleteRoom,
  leaveRoom,
  createNewRoomWith // 2
} from "@/utils/actions"

const roomContextMenu = ref<any>(null)
const friendContextMenu = ref<any>(null)

function handleClickRoom(event: Event, item: any) {
  event.preventDefault()
  console.log("roomContextMenu: ", roomContextMenu.value)
  roomContextMenu.value.showMenu(event, item)
}

function handleClickFriend(event: Event, item: any) {
  event.preventDefault()
  friendContextMenu.value.showMenu(event, item)
}

const roomActions = ref<Option[]>([
  {
    name: "Edit",
    class: "editRoom",
    action: async (first: Parameters<typeof editRoom>[0]) => {
      const newName = prompt("Enter new name")
      if (newName) {
        await editRoom(first, newName)
      }
    }

  },
  {
    name: "Delete",
    class: "deleteRoom",
    action: deleteRoom
  },
  {
    name: "Leave",
    class: "leaveRoom",
    action: leaveRoom
  },
])

const friendActions = ref<Option[]>([
  {
    name: "Block",
    class: "blockUser",
    action: blockUser
  },
  {
    name: "Unfriend",
    class: "unfriendUser",
    action: unfriendUser
  },
  {
    name: "New room",
    class: "createNewRoomWith",
    action: createNewRoomWith
  },
])

type Option = {
  name: string
  class: string
  action: (...args: any[]) => Promise<void>
}

function itemAdapter(item: any) {
  // order of props should be, if included, id, name, username, email
  // we don't know what props will be included, so we have to check and exclude
  // the ones that aren't included
  const props = ["id", "name", "username", "email"]
  const itemProps = Object.entries(item)
  const includedProps = props.filter(prop => itemProps.some(([key, value]) => key === prop))
    .map(prop => itemProps.find(([key, value]) => key === prop)![1])
    console.log("includedProps: ", includedProps)
  return includedProps
}

function executeActionRoom({ option }: { option: Option }) {
  const item = roomContextMenu.value.item ?? friendContextMenu.value.item
  option.action(...itemAdapter(item))
}

function executeActionFriend({ option }: { option: Option }) {
  const item = friendContextMenu.value.item
  option.action(...itemAdapter(item))
}

const router = useRouter()

const newRoom = async (e: Event, id: string) => {
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
  id: string
  last_message: string
}

interface Friend {
  username: string
  id: string
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
