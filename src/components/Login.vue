<!-- //src/components/Login.vue -->

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  console.log(`Login with: ${email.value}, ${password.value}`)
  // Adicionar lógica para autenticação aqui
}
</script>

<template>
  <div class="login-container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="Digite seu email" />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input id="password" type="password" v-model="password" placeholder="Digite sua senha" />
      </div>
      <button type="submit" class="submit-button">Entrar</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 300px;
  margin: auto;
}

.title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2563eb;
}
</style>
