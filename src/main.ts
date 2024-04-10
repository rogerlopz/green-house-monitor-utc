import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)
app.use(VueGoogleMaps, { load: { key: import.meta.env.VITE_GMAPS_API_KEY } })

app.mount('#app')
