import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// Removemos as importações estáticas das views
// import LoginView from '../views/LoginView.vue'
// import Dashboard from '../views/Dashboard.vue'
// import GerenciarUsuariosView from '../views/GerenciarUsuariosView.vue'
// import DisciplinasView from '../views/DisciplinasView.vue'
// import SolicitarMatriculaView from '../views/SolicitarMatriculaView.vue'
// import AprovarMatriculaView from '../views/AprovarMatriculaView.vue'
// import TarefasView from '../views/TarefasView.vue'
// import QuadroSemanalView from '../views/QuadroSemanalView.vue'
// import EnviarNotificacaoView from '../views/EnviarNotificacaoView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/usuarios',
    name: 'GerenciarUsuarios',
    component: () => import('../views/GerenciarUsuariosView.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/disciplinas',
    name: 'Disciplinas',
    component: () => import('../views/DisciplinasView.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/solicitar-matricula',
    name: 'SolicitarMatricula',
    component: () => import('../views/SolicitarMatriculaView.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/aprovar-matricula',
    name: 'AprovarMatricula',
    component: () => import('../views/AprovarMatriculaView.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: () => import('../views/TarefasView.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/quadro-semanal',
    name: 'QuadroSemanal',
    component: () => import('../views/QuadroSemanalView.vue'),
    // meta: { requiresAuth: true }
  },
  // {
  //   path: '/notificacoes',
  //   name: 'EnviarNotificacao',
  //   component: () => import('../views/EnviarNotificacaoView.vue'),
  //   meta: { requiresAuth: true }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Redireciona para login se a rota requer autenticação e o usuário não está autenticado
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next('/login')
  } 
  // Evita que usuários autenticados acessem a página de login
  else if (to.path === '/login' && authStore.isAuthenticated()) {
    next('/')
  } 
  // Permite acesso a outras rotas
  else {
    next()
  }
})

export default router
