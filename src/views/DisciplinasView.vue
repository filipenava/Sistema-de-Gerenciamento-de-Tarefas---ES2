<!-- //src/views/DisciplinasView.vue -->

<script setup>
import { ref } from 'vue'
import ListaDisciplinas from '../components/ListaDisciplinas.vue'
import NovaDisciplina from '../components/NovaDisciplina.vue'
import EditarDisciplina from '../components/EditarDisciplina.vue'
import ExcluirDisciplina from '../components/ExcluirDisciplina.vue'

// Controle dos modais
const showModalNova = ref(false)
const showModalEditar = ref(false)
const showModalExcluir = ref(false)

// Dados da disciplina selecionada
const disciplinaSelecionada = ref(null)

// Funções para abrir os modais
const abrirModalNova = () => {
  showModalNova.value = true
}

const abrirModalEditar = (disciplina) => {
  disciplinaSelecionada.value = disciplina
  showModalEditar.value = true
}

const abrirModalExcluir = (disciplina) => {
  disciplinaSelecionada.value = disciplina
  showModalExcluir.value = true
}

// Função para fechar os modais
const fecharModais = () => {
  disciplinaSelecionada.value = null
  showModalNova.value = false
  showModalEditar.value = false
  showModalExcluir.value = false
}
</script>

<template>
  <div class="disciplinas-view-container">
    <h1 class="page-title">Gerenciamento de Disciplinas</h1>

    <!-- Botão para criar nova disciplina -->
    <button @click="abrirModalNova" class="btn-primary">Nova Disciplina</button>

    <!-- Lista de disciplinas -->
    <ListaDisciplinas
      @editarDisciplina="abrirModalEditar"
      @excluirDisciplina="abrirModalExcluir"
    />

    <!-- Modal para nova disciplina -->
    <div v-if="showModalNova" class="modal-backdrop">
      <div class="modal">
        <NovaDisciplina @fechar="fecharModais" />
      </div>
    </div>

    <!-- Modal para editar disciplina -->
    <div v-if="showModalEditar" class="modal-backdrop">
      <div class="modal">
        <EditarDisciplina :disciplina="disciplinaSelecionada" @fechar="fecharModais" />
      </div>
    </div>

    <!-- Modal para excluir disciplina -->
    <div v-if="showModalExcluir" class="modal-backdrop">
      <div class="modal">
        <ExcluirDisciplina :disciplina="disciplinaSelecionada" @fechar="fecharModais" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.disciplinas-view-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
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
