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

    //Not Found
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    },

    //Auth
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
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
        requiresAuth: true,
      }
    },


    {
      path: '/adminroles',
      name: 'adminroles',
      component: () => import('../views/admin/roles/RolesView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/adminpersons',
      name: 'adminpersons',
      component: () => import('../views/admin/persons/PersonsView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/admincategories',
      name: 'admincategories',
      component: () => import('../views/admin/categories/CategoriesView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/adminproducts',
      name: 'adminproducts',
      component: () => import('../views/admin/product/ProductsView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },

    
    {
      path: '/createrol',
      name: 'createrol',
      component: () => import('../views/admin/roles/CreateView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/createperson',
      name: 'createperson',
      component: () => import('../views/admin/persons/CreateView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/createcategory',
      name: 'createcategory',
      component: () => import('../views/admin/categories/CreateView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/createproduct',
      name: 'createproduct',
      component: () => import('../views/admin/product/CreateView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },

    
    {
      path: '/editcategory/:id',
      name: 'editcategory',
      component: () => import('../views/admin/categories/EditView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
    {
      path: '/editproduct/:id',
      name: 'editproduct',
      component: () => import('../views/admin/product/EditView.vue'),
      meta: {
        requiresAuth: true,
        requiredRole: [1]
      }
    },
  ]
})

export default router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiredRole = to.meta.requiredRole;
  const isAuthenticated = localStorage.getItem('user');
  const userRole = isAuthenticated ? parseInt(JSON.parse(isAuthenticated).rol) : null;
  if (!requiresAuth && isAuthenticated && to.name === 'login') {
    next('/admindashboard');
  }else if (requiresAuth && !isAuthenticated) {
    next('/')
  } else if (requiredRole && requiredRole.length > 0 && (!isAuthenticated || !requiredRole.includes(userRole))) {
    next('/notfound'); 
  } else {
    next()
  }
})
