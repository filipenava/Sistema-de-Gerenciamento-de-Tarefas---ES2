<!-- //src/components/SolicitarMatricula.vue -->

<script setup>
import { ref } from 'vue'

const disciplinasDisponiveis = ref([
  { id: 1, nome: 'Matemática', semestre: '2024/1', professor: 'João' },
  { id: 2, nome: 'História', semestre: '2024/1', professor: 'Maria' },
  { id: 3, nome: 'Geografia', semestre: '2024/1', professor: 'Carlos' },
  { id: 4, nome: 'Física', semestre: '2024/1', professor: 'Ana' },
])

const solicitarMatricula = (disciplinaId) => {
  console.log(`Solicitação de matrícula para a disciplina ${disciplinaId} enviada.`)
  alert(`Matrícula na disciplina com ID ${disciplinaId} foi solicitada com sucesso.`)
  // Aqui você pode implementar a lógica para enviar a solicitação ao backend
}
</script>

<template>
  <div class="matricula-container">
    <h2 class="section-title">Disciplinas Disponíveis</h2>
    <table class="matricula-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Semestre</th>
          <th>Professor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="disciplina in disciplinasDisponiveis" :key="disciplina.id">
          <td>{{ disciplina.nome }}</td>
          <td>{{ disciplina.semestre }}</td>
          <td>{{ disciplina.professor }}</td>
          <td>
            <button class="btn-solicitar" @click="solicitarMatricula(disciplina.id)">
              Solicitar Matrícula
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.matricula-container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.matricula-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

tr:hover {
  background-color: #f1f5f9;
}

.btn-solicitar {
  background-color: #3b82f6;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-solicitar:hover {
  background-color: #2563eb;
}
</style>
