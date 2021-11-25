import { createApp } from 'vue'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'



const app = createApp(App)

app.use(VueTelInput).use(store).use(router).mount('#app')
