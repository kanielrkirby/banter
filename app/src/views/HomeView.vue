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
const loading = ref<boolean>(true);

async function getList() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL
      }/api/profile/related/`, {
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
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/room/profile`, {
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
    </main>
  </Layout>
</template>
