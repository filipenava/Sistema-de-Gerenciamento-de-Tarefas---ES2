<!-- //src/components/CadastroUsuario.vue -->

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const userType = ref('Aluno') // Padrão para Aluno, pode mudar

const register = () => {
  console.log({ name: name.value, email: email.value, password: password.value, userType: userType.value })
  // Lógica para cadastrar o usuário
}
</script>

<template>
  <div class="register-container">
    <h1 class="title">Cadastro</h1>
    <form @submit.prevent="register" class="form">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input id="name" type="text" v-model="name" placeholder="Digite seu nome" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="Digite seu email" />
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input id="password" type="password" v-model="password" placeholder="Digite sua senha" />
      </div>
      <div class="form-group">
        <label for="userType">Tipo de Usuário:</label>
        <select id="userType" v-model="userType">
          <option>Aluno</option>
          <option>Professor</option>
          <option>Coordenador</option>
          <option>Administrador</option>
        </select>
      </div>
      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<style scoped>
.register-container {
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

input, select {
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
