<!-- //src/components/EnviarNotificacao.vue -->

<script setup>
import { ref } from 'vue'

const tarefas = ref([
  { id: 1, titulo: 'Exercício 1', prazo: '2024-11-20', status: 'Pendente' },
  { id: 2, titulo: 'Trabalho em Grupo', prazo: '2024-11-25', status: 'Atrasado' },
])

const enviarNotificacao = (id, tipo) => {
  console.log(`Notificação do tipo ${tipo} enviada para a tarefa ${id}.`)
  // Adicionar lógica para envio de notificação
}
</script>

<template>
  <div class="enviar-notificacao-container">
    <h1>Enviar Notificações</h1>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Prazo</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarefa in tarefas" :key="tarefa.id">
          <td>{{ tarefa.titulo }}</td>
          <td>{{ tarefa.prazo }}</td>
          <td>{{ tarefa.status }}</td>
          <td>
            <button @click="enviarNotificacao(tarefa.id, 'Prazo')">Enviar Notificação de Prazo</button>
            <button v-if="tarefa.status === 'Atrasado'" @click="enviarNotificacao(tarefa.id, 'Atraso')">Enviar Notificação de Atraso</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.enviar-notificacao-container {
  max-width: 600px;
  margin: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
button {
  margin-right: 5px;
}
</style>
