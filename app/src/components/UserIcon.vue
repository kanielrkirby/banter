<template>
  <template v-if="user">
    <a class="relative" :href="`/profile/${user.id}`">
      <div class="w-16 h-16">
        <img class="w-full aspect-square overflow-hidden rounded-full" v-if="user.avatar" :src="user.avatar" :alt="user.name" />
        <div :class="(user.color ?? 'bg-card-900') + ' w-full rounded-full aspect-square overflow-hidden text-white flex justify-center items-center'" v-else>
          {{ user.username[0] }}
        </div>
      </div>
      <span class="bg-success-500 rounded-full w-4 h-4 bottom-0 right-0 absolute" />
    </a>
  </template>
  <template v-else>
    <div class="w-16 h-16 rounded-full text-white bg-G-900">
      ?
    </div>
  </template>
</template>

<script setup lang="ts">
let { user } = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>
