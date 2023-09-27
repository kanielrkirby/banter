<script lang="ts" setup>
import Layout from "@/layouts/Main.vue";
import axios from "axios";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface Profile {
  id: number;
  username: string;
}

const profiles = ref<Profile[]>([]);
const error = ref<string | null>(null);

async function getList() {
  try {
    const response = await axios.get(`${
      import.meta.env.VITE_BACKEND_URL
    }/api/profile/related/`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      profiles.value = response.data;
    }
  } catch (err) {
    error.value = "Error getting profiles, please try again later."
  }
}

getList();
</script>

<template>
  <Layout>
    <main>
      <ul>
        <li v-for="profile in profiles" :key="profile.id">
          <a href="">
            {{ profile.username }}
          </a>
        </li>
      </ul>
    </main>
  </Layout>
</template>
