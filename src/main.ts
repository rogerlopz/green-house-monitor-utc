import './assets/main.css'
import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(VueQueryPlugin)
app.use(pinia)
app.use(router)
app.use(VueGoogleMaps, { load: { key: import.meta.env.VITE_GMAPS_API_KEY } })

app.mount('#app')
