<!-- //src/components/ListaDisciplinas.vue -->

<script setup>
import { ref, computed } from 'vue'

const disciplinas = ref([
  { id: 1, nome: 'Matemática', semestre: '2024/1', professor: 'João' },
  { id: 2, nome: 'História', semestre: '2024/1', professor: 'Maria' },
  { id: 3, nome: 'Geografia', semestre: '2024/1', professor: 'Carlos' },
])

const filtros = ref({ semestre: '', nome: '', professor: '' })

const disciplinasFiltradas = computed(() => {
  return disciplinas.value.filter((disciplina) => {
    const semestreMatch = filtros.value.semestre
      ? disciplina.semestre.includes(filtros.value.semestre)
      : true
    const nomeMatch = filtros.value.nome
      ? disciplina.nome.toLowerCase().includes(filtros.value.nome.toLowerCase())
      : true
    const professorMatch = filtros.value.professor
      ? disciplina.professor.toLowerCase().includes(filtros.value.professor.toLowerCase())
      : true

    return semestreMatch && nomeMatch && professorMatch
  })
})
</script>

<template>
  <div class="disciplinas-container">
    <h2 class="section-title">Lista de Disciplinas</h2>

    <!-- Filtros -->
    <form @submit.prevent class="filter-form">
      <input v-model="filtros.semestre" type="text" placeholder="Semestre" />
      <input v-model="filtros.nome" type="text" placeholder="Nome da Disciplina" />
      <input v-model="filtros.professor" type="text" placeholder="Professor" />
    </form>

    <!-- Tabela -->
    <table class="disciplinas-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Semestre</th>
          <th>Professor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="disciplina in disciplinasFiltradas" :key="disciplina.id">
          <td>{{ disciplina.nome }}</td>
          <td>{{ disciplina.semestre }}</td>
          <td>{{ disciplina.professor }}</td>
          <td>
            <button @click="$emit('editarDisciplina', disciplina)" class="btn-edit">Editar</button>
            <button @click="$emit('excluirDisciplina', disciplina)" class="btn-delete">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.disciplinas-container {
  text-align: center;
  margin-top: 20px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.filter-form input {
  margin: 0 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.disciplinas-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.btn-edit {
  background-color: #3b82f6;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.btn-delete {
  background-color: #ef4444;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #2563eb;
}

.btn-delete:hover {
  background-color: #dc2626;
}
</style>
