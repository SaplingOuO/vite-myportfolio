import { createRouter, createWebHistory } from 'vue-router'
// 暫時先指向 App.vue 或建立一個簡單的 HomeView.vue
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router