<!-- //src/components/QuadroSemanal.vue -->

<script setup>
import { ref } from 'vue'

const tarefasSemana = ref([
  { id: 1, titulo: 'Exercício 1', status: 'Pendente', descricao: 'Resolver problemas da página 10', data: '2024-11-20' },
  { id: 2, titulo: 'Trabalho em Grupo', status: 'Concluído', descricao: 'Preparar apresentação', data: '2024-11-22' },
  { id: 3, titulo: 'Revisão', status: 'Pendente', descricao: 'Estudar para a prova', data: '2024-11-23' },
])

const diasDaSemana = [
  { nome: 'Segunda', index: 1 },
  { nome: 'Terça', index: 2 },
  { nome: 'Quarta', index: 3 },
  { nome: 'Quinta', index: 4 },
  { nome: 'Sexta', index: 5 },
  { nome: 'Sábado', index: 6 },
  { nome: 'Domingo', index: 0 },
]

const getTarefasPorDia = (diaIndex) => {
  return tarefasSemana.value.filter(
    (tarefa) => new Date(tarefa.data).getDay() === diaIndex
  )
}
</script>

<template>
  <div class="quadro-semanal">
    <div class="semana">
      <div v-for="dia in diasDaSemana" :key="dia.index" class="dia">
        <h3 class="dia-title">{{ dia.nome }}</h3>
        <ul>
          <li v-for="tarefa in getTarefasPorDia(dia.index)" :key="tarefa.id">
            <div class="tarefa">
              <strong>{{ tarefa.titulo }}</strong>
              <p>{{ tarefa.descricao }}</p>
              <span :class="tarefa.status === 'Concluído' ? 'status-concluido' : 'status-pendente'">
                {{ tarefa.status }}
              </span>
            </div>
          </li>
          <li v-if="getTarefasPorDia(dia.index).length === 0" class="no-tasks">
            Nenhuma tarefa
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quadro-semanal {
  max-width: 900px;
  margin: auto;
}

.semana {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.dia {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dia-title {
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #3b82f6;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.tarefa {
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tarefa strong {
  font-size: 1rem;
}

.tarefa p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #555;
}

.status-concluido {
  color: #10b981;
  font-weight: bold;
}

.status-pendente {
  color: #ef4444;
  font-weight: bold;
}

.no-tasks {
  font-size: 0.9rem;
  text-align: center;
  color: #888;
}
</style>
