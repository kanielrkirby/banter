<script lang="ts" setup>
import Layout from "@/layouts/Main.vue";
import axios from "axios";

import { ref } from "vue";

interface Profile {
  id: number;
  username: string;
}

const profiles = ref<Profile[]>([]);
const error = ref<string | null>(null);
const loading = ref<boolean>(true);

async function getList() {
  try {
    const response = await axios.get(`${
      import.meta.env.VITE_BACKEND_URL
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
}

getList();
</script>

<template>
  <Layout>
    <main>
      <Fragment v-if="profiles.length === 0">
        <p v-if="error">{{ error }}</p>
        <p v-else-if="loading">Loading...</p>
        <p v-else>No profiles found.</p>
      </Fragment>
      <ul v-else>
        <li v-for="profile in profiles" :key="profile.id">
          <a href="`${import.meta.env.VITE_BACKEND_URL}/getroom/{{ profile.id }}`">
            {{ profile.username }}
          </a>
        </li>
      </ul>
    </main>
  </Layout>
</template>
