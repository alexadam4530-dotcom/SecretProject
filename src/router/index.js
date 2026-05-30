import { createRouter, createWebHistory } from 'vue-router'

// ទាញយក (Import) រាល់ Pages ទាំងអស់ដែលនៅក្នុងគម្រោងមកប្រើប្រាស់
import Home from '../pages/home/Home.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Dashboard from '../pages/dashboard/Dashboard.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  // 1. ទំព័រដើមគេបង្អស់ (Home Page)
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 2. ទំព័រចូលប្រព័ន្ធ (Login Page)
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 3. ផ្ទាំងចុះឈ្មោះគណនី (Register Page)
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // 4. ផ្ទាំងគ្រប់គ្រងទិន្នន័យ (Dashboard Page)
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  // 5. ទំព័រ Error 404 - ចាប់រាល់លីងដែល User វាយខុសទាំងអស់ (ត្រូវដាក់នៅក្រោមគេបង្អស់)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router