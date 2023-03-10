import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import"bootstrap-icons/font/bootstrap-icons.css";
import"bootstrap/dist/js/bootstrap.js";
import"bootstrap/dist/css/bootstrap.css";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'

const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App)

app.use(createPinia())
app.use(router)

createApp(App).use(vuetify).mount('#app')