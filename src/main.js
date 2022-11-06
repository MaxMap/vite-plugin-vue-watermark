import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugin from './package/index';
const app = createApp(App)
app.use(plugin)
app.mount('#app')
