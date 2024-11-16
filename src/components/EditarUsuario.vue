<!-- //src/components/EditarUsuario.vue -->

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  usuario: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['fechar'])

const name = ref('')
const email = ref('')
const password = ref('')
const userType = ref('') // Adicionando o campo Tipo de Usuário

watch(
  () => props.usuario,
  (novoUsuario) => {
    if (novoUsuario) {
      name.value = novoUsuario.name
      email.value = novoUsuario.email
      userType.value = novoUsuario.type // Preenche com o tipo de usuário
    }
  },
  { immediate: true }
)

const updateUser = () => {
  console.log({
    id: props.usuario.id,
    name: name.value,
    email: email.value,
    password: password.value,
    type: userType.value,
  })
  // Aqui você pode implementar a lógica para salvar as alterações na API ou no store
  emit('fechar') // Fecha o modal após salvar
}
</script>

<template>
  <div class="edit-user-container">
    <h2 class="section-title">Editar Usuário</h2>
    <form @submit.prevent="updateUser" class="form-container">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input id="name" type="text" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Nova Senha:</label>
        <input id="password" type="password" v-model="password" placeholder="Deixe vazio para não alterar" />
      </div>
      <div class="form-group">
        <label for="userType">Tipo de Usuário:</label>
        <select id="userType" v-model="userType">
          <option value="Aluno">Aluno</option>
          <option value="Professor">Professor</option>
          <option value="Coordenador">Coordenador</option>
          <option value="Administrador">Administrador</option>
        </select>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-button">Salvar Alterações</button>
        <button type="button" class="cancel-button" @click="emit('fechar')">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.edit-user-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.form-container {
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

.form-actions {
  display: flex;
  justify-content: space-between;
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

.cancel-button {
  background-color: #ef4444;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cancel-button:hover {
  background-color: #dc2626;
}
</style>

