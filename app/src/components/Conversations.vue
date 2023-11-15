<template>
  <div class="flex gap-4 items-center p-3 rounded-md bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-100 cursor-pointer" v-for="conversation in conversations">
    <UserIcon :user="conversation" />
    <div class="flex">
      <span class="text-black font-bold text-opactiy-80">{{ conversation.name ?? "New chat" }}</span>
      <span class="text-black text-opacity-50">{{ conversation?.last_message?.created_at ?? conversation?.created_at }}</span>
    </div>
    <span class="text-black text-opacity-50 text-sm font-medium">{{ conversation?.last_message?.body ?? "No messages yet." }}</span>
  </div>
  <div @click="startConversation(friend)" class="flex gap-4 items-center p-3 rounded-md bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-100 cursor-pointer" v-for="friend in friends">
    <UserIcon :user="friend" />
    <div class="">
      <span class="font-bold text-black text-opacity-80">{{ friend.username }}</span>
      <p class="text-opacity-50 text-black text-sm font-medium">Start a new conversation!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { conversations, friends } from "@/stores/conversations";
import UserIcon from "@/components/UserIcon.vue";
import { createNewRoomWith } from "@/utils/actions";

const startConversation = (friend: any) => {
  createNewRoomWith("", [friend.email]);
};
</script>
