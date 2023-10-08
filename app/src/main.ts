import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ContextMenu from 'add-context-menu'
import ContextMenuItem from 'add-context-menu'
import "./utils/contextMenu"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ContextMenu)
app.use(ContextMenuItem)

app.mount('#app')
