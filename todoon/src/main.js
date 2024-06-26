import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import { register } from 'swiper/element/bundle'
register()

createApp(App).use(router).mount('#app')
