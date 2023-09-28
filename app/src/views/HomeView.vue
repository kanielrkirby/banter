<script lang="ts" setup>
import Layout from "@/layouts/Main.vue";
import axios from "axios";

import { ref } from "vue";

interface Profile {
  id: number;
  username: string;
}

interface Room {
  id: number;
  name: string;
}

const profiles = ref<Profile[]>([]);
const rooms = ref<Room[]>([]);
const error = ref<string | null>(null);
const friendError = ref<string | null>(null);
const loading = ref<boolean>(true);
const addFriendVal = ref<boolean>(false);
const userId = ref<number>(0);

const toggleAddFriend = () => addFriendVal.value = !addFriendVal.value;

async function addFriend() {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL
      }/api/profile/add/${userId.value}/`,
      {},
      {
        withCredentials: true,
      });

    if (response.status === 200) {
      toggleAddFriend();
      getList();
    } else {
      friendError.value = "Error adding friend"
    }

  } catch (err) {
    error.value = "Error adding friend"
    console.log(err);
  } finally {
    addFriendVal.value = false;
  }
}

async function getList() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL
      }/api/profile/friend/`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      profiles.value = response.data;
      loading.value = false;
    }
  } catch (err) {
    error.value = "Error getting profiles, please try again later."
  }
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/room/profile/`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      rooms.value = response.data;
      loading.value = false;
    }
  } catch (err) {
    error.value = "Error getting rooms, please try again later."
  }
}

getList();
</script>

<template>
  <Layout>
    <main>
      <template v-if="profiles.length === 0 && rooms.length === 0">
        <p v-if="error">{{ error }}</p>
        <p v-else-if="loading">Loading...</p>
        <p v-else>No profiles/rooms found.</p>
      </template>
      <template v-else>
        <ul>
          <template v-for="room in rooms" :key="room.id">
            <li>
              Room: {{ room.name }}
            </li>
          </template>
          <template v-for="profile in profiles" :key="profile.id">
            <li>
              Profile: {{ profile.username }}
            </li>
          </template>
        </ul>
      </template>
      <button @click="toggleAddFriend">Add Friend</button>
      <template v-if="addFriendVal">
        <form @submit.prevent="addFriend" class="fixed w-full h-full">
          <label for="userId">User ID</label>
          <input v-model="userId" type="text" name="userId" id="userId" required />
          <button type="submit">Add Friend</button>
        </form>
      </template>
    </main>
  </Layout>
</template>
