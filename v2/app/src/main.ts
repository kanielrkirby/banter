import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueNativeSock from 'vue-native-websocket-vue3'

const app = createApp(App)

app.use(router)

app.use(VueNativeSock, 'ws://localhost:8000/chat', {
  format: 'json',
})

app.mount('#app')
