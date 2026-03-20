import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { useTheme } from './composables/useTheme'

// Initialize theme immediately to avoid flash
useTheme()

createApp(App).use(router).mount('#app')
