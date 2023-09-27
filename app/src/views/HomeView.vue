<script lang="ts" setup>
import Layout from "@/layouts/Main.vue";
import axios from "axios";
import { ref } from "vue";

interface Profile {
  id: number;
  username: string;
}

const profiles = ref<Profile[]>([]);
const error = ref("");

async function getProfiles() {
  try {
    const response = await axios.get("http://localhost:8000/api/profile/", {
      withCredentials: true,
    });

    if (response.status === 200) {
      profiles.value = response.data;
    }
  } catch (error) {
    console.error("Error getting profiles:", error);
  }
}

</script>

<template>
  <Layout>
    <main>
      <button @click="getProfiles">Get Profiles</button>
      <ul>
        <li v-for="profile in profiles" :key="profile.id">
          {{ profile.username }}
        </li>
      </ul>
    </main>
  </Layout>
</template>
