import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ToDoView from '../views/ToDoView.vue'
import DoingView from '../views/DoingView.vue'
import DoneView from '../views/DoneView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresToken: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/home/todo',
    name: 'todo',
    component: ToDoView,
    meta: {
      requiresToken: true
    }

  },
  {
    path: '/home/doing',
    name: 'doing',
    component: DoingView,
    meta: {
      requiresToken: true
    }

  },
  {
    path: '/home/done',
    name: 'done',
    component: DoneView,
    meta: {
      requiresToken: true
    }

  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresToken: true
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Vérifiez si la route requiert un token
  const requiresToken = to.matched.some(record => record.meta.requiresToken)

  // Vérifiez si l'utilisateur a un token
  const hasToken = localStorage.getItem('token')

  // Si la route requiert un token et que l'utilisateur n'en a pas, redirigez-le vers la page de connexion (ou une autre page appropriée)
  if (requiresToken && !hasToken) {
    next('/home') // Remplacez '/login' par la route appropriée pour votre page de connexion
  } else {
    next()
  }
})

export default router
