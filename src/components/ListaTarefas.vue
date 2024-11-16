<!-- //src/components/ListaTarefas.vue -->

<script setup>
import { ref, computed } from 'vue'

const tarefas = ref([
  { id: 1, titulo: 'Exercício 1', status: 'Concluído', descricao: 'Resolver os problemas da página 10', periodoEntrega: '2024-11-20' },
  { id: 2, titulo: 'Trabalho em Grupo', status: 'Pendente', descricao: 'Preparar apresentação', periodoEntrega: '2024-11-25' },
])

const filtro = ref('')
const tarefasFiltradas = computed(() =>
  tarefas.value.filter((tarefa) =>
    tarefa.titulo.toLowerCase().includes(filtro.value.toLowerCase())
  )
)
</script>

<template>
  <div class="lista-tarefas">
    <h2 class="section-title">Lista de Tarefas</h2>
    <input
      type="text"
      v-model="filtro"
      placeholder="Buscar tarefa por título"
      class="search-input"
    />
    <table class="tarefas-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Status</th>
          <th>Período de Entrega</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarefa in tarefasFiltradas" :key="tarefa.id">
          <td>{{ tarefa.titulo }}</td>
          <td>{{ tarefa.status }}</td>
          <td>{{ tarefa.periodoEntrega }}</td>
          <td>
            <button class="btn-primary" @click="$emit('entregarTarefa', tarefa)">Entregar</button>
          </td>
        </tr>
        <tr v-if="tarefasFiltradas.length === 0">
          <td colspan="4">Nenhuma tarefa encontrada.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.search-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}
</style>
