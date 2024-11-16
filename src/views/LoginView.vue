<!-- //src/views/LoginView.vue -->

<script setup>
import { ref } from 'vue'
import Login from '../components/Login.vue'
import CadastroUsuario from '../components/CadastroUsuario.vue'

const isLogin = ref(true) // Alterna entre login e cadastro
</script>

<template>
  <div class="login-view-container">
    <div class="header">
      <h1 class="title">{{ isLogin ? 'Login' : 'Cadastro' }}</h1>
      <button @click="isLogin = !isLogin" class="toggle-button">
        {{ isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login' }}
      </button>
    </div>
    <div class="content">
      <!-- Alterna entre os componentes -->
      <Login v-if="isLogin" />
      <CadastroUsuario v-else />
    </div>
  </div>
</template>

<style scoped>
.login-view-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 1.5rem;
  color: #333;
}

.toggle-button {
  margin-top: 10px;
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #2563eb;
}

.content {
  margin-top: 20px;
}
</style>
