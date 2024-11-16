<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <!-- Botão para abrir/fechar o menu lateral (visível apenas no mobile) -->
      <v-btn icon @click="drawer = !drawer" v-if="isMobile">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <!-- Título com ícone -->
      <v-app-bar-title>
        <v-icon class="mr-2">mdi-calendar-check-outline</v-icon>
        Sistema de Gerenciamento de Tarefas
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- Botão de logout -->
      <v-btn v-if="authStore.isAuthenticated()" @click="logout" color="error" text>
        Sair
      </v-btn>
    </v-app-bar>

    <!-- Menu de Navegação Lateral -->
    <v-navigation-drawer
      app
      v-model="drawer"
      :temporary="isMobile"
      :permanent="!isMobile"
      color="grey lighten-4"
      class="navigation-drawer"
    >
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.path" router>
          <template #prepend>
            <v-icon>{{ link.icon }}</v-icon>
          </template>
          <template #title>
            {{ link.text }}
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Conteúdo Principal -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Snackbar para Feedback -->
    <v-snackbar v-model="logoutSnackbar" color="success" timeout="3000">
      Logout realizado com sucesso!
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const authStore = useAuthStore()
const router = useRouter()
const drawer = ref(true) // Abre o menu lateral por padrão
const logoutSnackbar = ref(false)

// Determinar se o dispositivo é mobile
const isMobile = computed(() => window.innerWidth <= 600)

onMounted(() => {
  // Recalcular o valor no redimensionamento
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 600
  })
})

const links = computed(() => [
  { text: 'Dashboard', path: '/', icon: 'mdi-view-dashboard' },
  { text: 'Gerenciar Usuários', path: '/usuarios', icon: 'mdi-account-multiple' },
  { text: 'Disciplinas', path: '/disciplinas', icon: 'mdi-book-open-page-variant' },
  { text: 'Solicitar Matrícula', path: '/solicitar-matricula', icon: 'mdi-school' },
  { text: 'Aprovar Matrícula', path: '/aprovar-matricula', icon: 'mdi-checkbox-marked' },
  { text: 'Tarefas', path: '/tarefas', icon: 'mdi-clipboard-text' },
  { text: 'Quadro Semanal', path: '/quadro-semanal', icon: 'mdi-calendar-week' },
])

const logout = () => {
  authStore.logout()
  logoutSnackbar.value = true
  router.push('/login')
}
</script>
