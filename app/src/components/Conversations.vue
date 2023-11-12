<template>
  <div class="h-full relative">
    <ul class="flex flex-col gap-2">
      <template v-for="conversation in conversations">
        <span>
          {{ conversation.name }}
        </span>
      </template>
    </ul>
    <div @click="(e) => ((e?.target as HTMLElement)?.querySelector('input') as HTMLElement)?.focus()"
      id="add-friend-container"
      class="cursor-text absolute bottom-0 py-2 px-4 m-2 rounded-full bg-black bg-opacity-10 text-black flex justify-between">
      <input @keyup.enter="send" id="add-friend" type="text" placeholder="Add a user"
        class="bg-transparent focus:outline-none" />
      <button @click="send" class="text-black">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";
import { addFriend } from "@/utils/actions";

const input = document.getElementById("add-friend") as HTMLInputElement;
const container = document.getElementById("add-friend-container") as HTMLDivElement;

const send = async () => {
  try {
    const input = document.getElementById("add-friend") as HTMLInputElement;
    if (input.value) {
      const res = await addFriend(input.value);
      if (res.status === 200) {
        input.value = "";
      }
    }
  } catch (err) {
    console.error(err);
  }
}
</script>
