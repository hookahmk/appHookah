import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EssenciaView from '../views/EssenciaView.vue'
import CarvaoView from '../views/CarvaoView.vue'
import AluminioView from '../views/AluminioView.vue'
import AcendedorView from '../views/AcendedorView.vue'
import PegadorView from '../views/PegadorView.vue'
import RoshView from '../views/RoshView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/essencia',
      name: 'essencia',
      component: EssenciaView
    },
    {
      path: '/carvao',
      name: 'carvao',
      component: CarvaoView
    },
    {
      path: '/aluminio',
      name: 'aluminio',
      component: AluminioView
    }
    ,
    {
      path: '/acendedor',
      name: 'acendedor',
      component: AcendedorView
    }
    ,
    {
      path: '/pegador',
      name: 'pegador',
      component: PegadorView
    }
    ,
    {
      path: '/rosh',
      name: 'rosh',
      component: RoshView
    }
    
  ]
})

export default router
