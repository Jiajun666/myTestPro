import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/project/AboutView.vue'),
    redirect: '/childOne',
    children: [
      {
        path: '/childOne',
        name: 'childOne',
        component: () => import('../views/project/ChildOne.vue')
      },
      {
        path: '/childTwo',
        name: 'childTwo',
        component: () => import('../views/project/ChildTwo.vue')
      }
    ]
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('../views/FirstView.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/project/ComponentTest.vue')
  },
  {
    path: '/grand-parent',
    name: 'GrandParent',
    component: () => import('../views/test/GrandParent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
