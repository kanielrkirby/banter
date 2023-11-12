<template>
  <div class="h-full relative">
    <ul class="flex flex-col gap-2">
      <template v-for="conversation in conversations">
        <span>
          {{ conversation.name }}
        </span>
      </template>
    </ul>
    <div @click="(e) => ((e?.target as HTMLElement)?.querySelector('input') as HTMLElement)?.focus()" id="add-friend-container" class="cursor-text absolute bottom-0 py-2 px-4 m-2 rounded-full bg-black bg-opacity-10 text-black flex justify-between">
      <input @keyup.enter="" id="add-friend" type="text" placeholder="Add a user" class="bg-transparent focus:outline-none" />
      <button class="text-black">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { conversations } from "@/stores/conversations";

const input = document.getElementById("add-friend") as HTMLInputElement;
const container = document.getElementById("add-friend-container") as HTMLDivElement;

input?.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    input.value = "";
  }
});

container?.addEventListener("click", () => {
  input.focus();
});
</script>
