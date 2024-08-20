import { createRouter, createWebHashHistory } from 'vue-router'
import PaginaPrincipal from '../feature/PaginaPrincipal/PaginaPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaPrincipal
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../feature/Login/LoginProjeto.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../feature/Cadastro/CadastroProjeto.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
