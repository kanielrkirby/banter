<!-- Context Menu -->

<template>
  <ul>
    <li v-for="action in actions" :key="action" @click="possibleActions[action].onClick">
      <img v-if="possibleActions[action].iconURL" :src="`/icons/${possibleActions[action].iconURL}`" alt="iconSVG" />
      <span :class="``">{{ action }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type PossibleActions = {
  [key: string]: {
    iconSVG?: string
    iconURL?: string
    onClick: () => void
  }
}

const possibleActions = ref<PossibleActions>({
  DeleteRoom: {
    iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>`,
    onClick: () => {
      console.log('DeleteRoom')
    }
  },
  EditRoom: {
    iconSVG: ``,
    onClick: () => {
      console.log('EditRoom')
    }
  },
  AddRoom: {
    iconSVG: ``,
    onClick: () => {
      console.log('AddRoom')
    }
  },
  UnfriendUser: {
    iconSVG: ``,
    onClick: () => {
      console.log('UnfriendUser')
    }
  },
  BlockUser: {
    iconSVG: ``,
    onClick: () => {
      console.log('BlockUser')
    }
  },
  UnblockUser: {
    iconSVG: ``,
    onClick: () => {
      console.log('UnblockUser')
    }
  }
})

type Action = keyof typeof possibleActions.value

const { actions } = defineProps<{ actions: Action[] }>()
</script>
