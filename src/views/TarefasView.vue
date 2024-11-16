<!-- //src/views/TarefasView.vue -->

<script setup>
import { ref } from 'vue'
import ListaTarefas from '../components/ListaTarefas.vue'
import NovaTarefa from '../components/NovaTarefa.vue'
import EntregaTarefa from '../components/EntregaTarefa.vue'

// Controle dos modais
const showModalNova = ref(false)
const showModalEntrega = ref(false)

// Dados da tarefa selecionada
const tarefaSelecionada = ref(null)

// Funções para abrir os modais
const abrirModalNova = () => {
  showModalNova.value = true
}

const abrirModalEntrega = (tarefa) => {
  tarefaSelecionada.value = tarefa
  showModalEntrega.value = true
}

// Função para fechar os modais
const fecharModais = () => {
  tarefaSelecionada.value = null
  showModalNova.value = false
  showModalEntrega.value = false
}
</script>

<template>
  <div class="tarefas-view">
    <h1 class="page-title">Gerenciamento de Tarefas</h1>

    <!-- Botão para criar nova tarefa -->
    <button @click="abrirModalNova" class="btn-primary">Nova Tarefa</button>

    <!-- Lista de tarefas -->
    <ListaTarefas @entregarTarefa="abrirModalEntrega" />

    <!-- Modal para criar nova tarefa -->
    <div v-if="showModalNova" class="modal-backdrop">
      <div class="modal">
        <NovaTarefa @fechar="fecharModais" />
      </div>
    </div>

    <!-- Modal para entregar tarefa -->
    <div v-if="showModalEntrega" class="modal-backdrop">
      <div class="modal">
        <EntregaTarefa :tarefa="tarefaSelecionada" @fechar="fecharModais" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tarefas-view {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
