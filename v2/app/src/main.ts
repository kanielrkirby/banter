import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueNativeSock from 'vue-native-websocket'

const app = createApp(App)

app.use(VueNativeSock, 'ws://localhost:8000/ws/chat/', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

app.use(router)

app.mount('#app')
