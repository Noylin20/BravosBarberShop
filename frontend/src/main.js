
import './assets/main.css'
import "vue-toast-notification/dist/theme-bootstrap.css"
import 'bootstrap'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {plugin, defaultConfig} from '@formkit/vue'
import { useToast } from 'vue-toast-notification'
import { createStore } from 'vuex'
import config from '../formkit.config'

import App from './App.vue'
import router from './router'



const $toast = useToast({
    duration:5000,
    position:'top-right'
})

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })


const app = createApp(App)

app.use(store)
app.provide('toast', $toast)
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
