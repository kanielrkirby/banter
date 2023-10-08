<template>
  <ul v-if="open" id="context-menu">
    <li v-for="action in actions" :key="action" @click="possibleActions[action].onClick">
      <img v-if="possibleActions[action].iconURL" :src="`/icons/${possibleActions[action].iconURL}`" alt="iconSVG" />
      <div v-else-if="possibleActions[action].iconSVG" v-html="possibleActions[action].iconSVG" />
      <span :class="``">{{ action }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'


type Action = keyof typeof possibleActions

const actions = ref<Action[]>([])

const open = ref(false)

const closeHandler = () => {
  document.removeEventListener('click', closeHandler)
  open.value = false
}

document.addEventListener('click', closeHandler)

const openContextMenu = (e: MouseEvent, actions: Action[]) => {
  e.preventDefault()
  open.value = true
  actions = actions
  for (let i = 0; i < actions.length; i++) {
    if (!possibleActions[actions[i]]) {
      throw new Error(`Action ${actions[i]} is not defined`)
    }
  }
}

const bindTo = ".context-menu-anchor" as const

document.addEventListener('contextmenu', (e) => {
  if (e.target instanceof HTMLElement && e.target.closest(bindTo)) {
    const items = e.target.closest(bindTo).getAttribute('data-context-menu').split(',')
    const actions = items.filter(item => possibleActions[item]).map((i) => {
      return {actionName: i.split(';')[0],
              actionArgs: i.split(';')[1].split('|')
      } as Action
    }) as Action[]
    e.preventDefault()
    openContextMenu(e, actions)
  }
})

</script>
