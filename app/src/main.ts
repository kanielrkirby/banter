import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSimpleContextMenu from 'vue-simple-context-menu';
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css';



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('vue-simple-context-menu', VueSimpleContextMenu);

app.mount('#app')
