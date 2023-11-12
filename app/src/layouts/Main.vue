<template>
  <Sidebar />
  <div class="flex">
    <List>
      <Invites v-if="type === 'invites'" />
      <Conversations v-else />
    </List>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar.vue";
import List from "@/components/List.vue";
import Conversations from "@/components/Conversations.vue";
import Invites from "@/components/Invites.vue";

const { type } = defineProps({
  type: {
    type: String,
    default: "conversations",
  },
});
</script>
