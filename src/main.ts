import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router';



import zzcpt from "../lib/index.js";
const app = createApp(App);
app.use(router)
app.use(zzcpt)
app.mount('#app')


