import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import DataCategoria from '@/views/DataCategoria.vue';
import AgregarCategoria from '@/views/AgregarCategoria.vue';
import DataCarros from '@/views/DataCarros.vue';
import AgregarCarrito from '@/views/AgregarCarrito.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/datos-categorias',
    name: 'datos-categoria',
    component: DataCategoria
  },
  {
    path: '/agregar-categorias',
    name: 'agregar-categoria',
    component: AgregarCategoria
  },
  {
    path: '/datos-carros',
    name: 'datos-carros',
    component: DataCarros
  },
  {
    path: '/agregar-carro',
    name: 'agregar-carro',
    component: AgregarCarrito
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
