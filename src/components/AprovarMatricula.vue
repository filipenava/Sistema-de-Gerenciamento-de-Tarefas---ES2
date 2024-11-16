<!-- //src/components/AprovarMatricula.vue -->

<script setup>
import { ref } from 'vue'

const solicitacoesPendentes = ref([
  { id: 1, aluno: 'Ana', disciplina: 'Matemática', semestre: '2024/1' },
  { id: 2, aluno: 'Carlos', disciplina: 'História', semestre: '2024/1' },
  { id: 3, aluno: 'Maria', disciplina: 'Física', semestre: '2024/1' },
  { id: 4, aluno: 'João', disciplina: 'Geografia', semestre: '2024/1' },
])

const aprovarSolicitacao = (id) => {
  const solicitacao = solicitacoesPendentes.value.find((item) => item.id === id)
  alert(`Matrícula de ${solicitacao.aluno} em ${solicitacao.disciplina} aprovada com sucesso.`)
  solicitacoesPendentes.value = solicitacoesPendentes.value.filter((item) => item.id !== id)
  console.log(`Solicitação ${id} aprovada.`)
  // Aqui você pode implementar a lógica de aprovação no backend
}

const rejeitarSolicitacao = (id) => {
  const solicitacao = solicitacoesPendentes.value.find((item) => item.id === id)
  alert(`Matrícula de ${solicitacao.aluno} em ${solicitacao.disciplina} rejeitada.`)
  solicitacoesPendentes.value = solicitacoesPendentes.value.filter((item) => item.id !== id)
  console.log(`Solicitação ${id} rejeitada.`)
  // Aqui você pode implementar a lógica de rejeição no backend
}
</script>

<template>
  <div class="aprovar-matricula-container">
    <h2 class="section-title">Solicitações Pendentes</h2>
    <table class="matricula-table">
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Disciplina</th>
          <th>Semestre</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="solicitacao in solicitacoesPendentes" :key="solicitacao.id">
          <td>{{ solicitacao.aluno }}</td>
          <td>{{ solicitacao.disciplina }}</td>
          <td>{{ solicitacao.semestre }}</td>
          <td>
            <button class="btn-aprovar" @click="aprovarSolicitacao(solicitacao.id)">
              Aprovar
            </button>
            <button class="btn-rejeitar" @click="rejeitarSolicitacao(solicitacao.id)">
              Rejeitar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.aprovar-matricula-container {
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
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
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

.btn-aprovar {
  background-color: #10b981;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  transition: background-color 0.3s ease;
}

.btn-aprovar:hover {
  background-color: #059669;
}

.btn-rejeitar {
  background-color: #ef4444;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-rejeitar:hover {
  background-color: #dc2626;
}
</style>
