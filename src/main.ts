//import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/fonts/Pokemon Classic.ttf"

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import NationalDex from './components/NationalDex.vue'
import Home from './components/Home.vue'

const routes = [
    { path: '/', name: 'App', component: Home},
    { path: '/pokedex', name: 'Pokedex', component: NationalDex},
    { path: '/login', component: LoginPage},
    { path: '/home', name: 'Home', component: Home},
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App)
app.use(router)

app.mount('#app')
