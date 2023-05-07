import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    //Auth
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },

    //View
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },

    //Admin
    {
      path: '/admindashboard',
      name: 'admindashboard',
      component: () => import('../views/admin/dashboard/DashboardView.vue'),
      meta: {
        requiresAuth: true
      }
    },

    //Products
    {
      path: '/adminproducts',
      name: 'adminproducts',
      component: () => import('../views/admin/product/ProductsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createproduct',
      name: 'createproduct',
      component: () => import('../views/admin/product/CreateView.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

export default router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = localStorage.getItem('user')
  if (requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
