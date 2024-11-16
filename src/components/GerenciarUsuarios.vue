<!-- //src/components/GerenciarUsuarios.vue -->

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'João', email: 'joao@exemplo.com', type: 'Aluno' },
  { id: 2, name: 'Maria', email: 'maria@exemplo.com', type: 'Professor' },
  { id: 3, name: 'Carlos Silva', email: 'carlos@escola.com', type: 'Coordenador' },
  { id: 4, name: 'Ana Paula', email: 'ana@educacao.com', type: 'Administrador' },
  { id: 5, name: 'Lucas Mendes', email: 'lucas.mendes@alunos.com', type: 'Aluno' },
  { id: 6, name: 'Fernanda Costa', email: 'fernanda.costa@docente.com', type: 'Professor' },
  { id: 7, name: 'Roberto Lima', email: 'roberto.lima@gestao.com', type: 'Coordenador' },
  { id: 8, name: 'Claudia Souza', email: 'claudia.souza@admin.com', type: 'Administrador' },
  { id: 9, name: 'Mariana Figueiredo', email: 'mariana.figueiredo@alunos.com', type: 'Aluno' },
  { id: 10, name: 'Pedro Henrique', email: 'pedro.henrique@professores.com', type: 'Professor' },
  { id: 11, name: 'Camila Oliveira', email: 'camila.oliveira@escola.com', type: 'Coordenador' },
  { id: 12, name: 'Gabriel Almeida', email: 'gabriel.almeida@admin.com', type: 'Administrador' },
  { id: 13, name: 'Aline Barros', email: 'aline.barros@alunos.com', type: 'Aluno' },
  { id: 14, name: 'Felipe Nunes', email: 'felipe.nunes@professores.com', type: 'Professor' },
  { id: 15, name: 'Juliana Rocha', email: 'juliana.rocha@escola.com', type: 'Coordenador' },
])

const deleteUser = (id) => {
  users.value = users.value.filter(user => user.id !== id)
  console.log(`Usuário ${id} excluído.`)
}
</script>

<template>
  <div class="manage-users-container">
    <h2 class="section-title">Lista de Usuários</h2>
    <table class="users-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.type }}</td>
          <td>
            <button @click="$emit('editarUsuario', user)" class="edit-button mr-2">Editar</button>
            <button @click="deleteUser(user.id)" class="delete-button">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.manage-users-container {
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: #3b82f6;
  color: white;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

.edit-button, .delete-button {
  background-color: #3b82f6;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #2563eb;
}

.delete-button {
  background-color: #ef4444;
}

.delete-button:hover {
  background-color: #dc2626;
}
</style>
