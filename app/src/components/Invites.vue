<template>
  <div @contextmenu.prevent.stop="handleClick($event, profile)" @click.prevent.stop="handleClick($event, profile)" v-for="profile in invites" :key="profile.id" class="min-w-[20rem] w-1/3 cursor-pointer font-body text-opacity-80 text-black rounded-md p-2 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-100">
    <div class="flex gap-2">
      <UserIcon :user="profile" />
      <div class="flex flex-col">
        <span class="font-body font-bold text-base">
          {{ profile.username }}
        </span>
        <p class="font-semibold text-sm h-3/5 text-ellipsis">
          {{ profile.username }} wants to be your friend!
        </p>
      </div>
    </div>
  </div>
  <vue-simple-context-menu element-id="invite-list-context-menu" :options="actions" ref="inviteContextMenu"
    @option-clicked="executeAction" />
</template>

<script setup lang="ts">
import { invites } from "@/stores/invites";
import UserIcon from "@/components/UserIcon.vue";
import { ref } from "vue";
import { addFriend, rejectFriend } from "@/utils/actions";

const actions = ref([
  {
    name: "Accept",
    action: addFriend,
  },
  {
    name: "Reject",
    action: rejectFriend,
  },
]);

const inviteContextMenu = ref<any>(null);

const handleClick = (event: Event, item: any) => {
  event.preventDefault()
  inviteContextMenu.value.showMenu(event, item);
};

const executeAction = async ({ item: profile, option }: any) => {
  try {
    await option.action(profile.email);
    invites.splice(invites.findIndex((invite) => invite.id === profile.id), 1);
  } catch (err) {
    console.error(err);
  }
};
</script> 
