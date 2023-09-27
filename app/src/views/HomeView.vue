<script lang="ts" setup>
import Layout from "@/layouts/Main.vue";
import axios from "axios";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { user } from "@/stores/user";

const router = useRouter();

//if (!user.value) {
 // router.push({ name: "login" });
//}

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
      <Fragment v-if="profiles.length === 0">
        <p v-if="error">{{ error }}</p>
        <p v-else>Loading...</p>
      </Fragment>
      <ul v-else>
        <li v-for="profile in profiles" :key="profile.id">
          <a href="">
            {{ profile.username }}
          </a>
        </li>
      </ul>
    </main>
  </Layout>
</template>
