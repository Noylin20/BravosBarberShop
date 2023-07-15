
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
import config from '../formkit.config'

import App from './App.vue'
import router from './router'



const $toast = useToast({
    duration:5000,
    position:'top-right'
})

// import { createApp, ref } from 'vue';

// const app = createApp({});

// app.config.globalProperties.$ref = ref; // Agrega ref a las propiedades globales de Vue

// app.mount('#app'); // Monta la instancia de Vue en tu elemento principal HTML


const app = createApp(App)

app.provide('toast', $toast)
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
