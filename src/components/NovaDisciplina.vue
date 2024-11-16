<!-- //src/components/NovaDisciplina.vue -->

<script setup>
import { ref } from 'vue'

const nome = ref('')
const semestre = ref('')
const professor = ref('')

const criarDisciplina = () => {
  if (!nome.value || !semestre.value || !professor.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }
  console.log('Nova disciplina criada:', { nome: nome.value, semestre: semestre.value, professor: professor.value })
  // Aqui, implemente a lógica para salvar a nova disciplina no backend ou atualizar o estado global.
}
</script>

<template>
  <div class="nova-disciplina-container">
    <h2 class="section-title">Criar Nova Disciplina</h2>
    <form @submit.prevent="criarDisciplina" class="form-container">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input id="nome" v-model="nome" type="text" placeholder="Digite o nome da disciplina" />
      </div>
      <div class="form-group">
        <label for="semestre">Semestre:</label>
        <input id="semestre" v-model="semestre" type="text" placeholder="Ex: 2024/1" />
      </div>
      <div class="form-group">
        <label for="professor">Professor:</label>
        <input id="professor" v-model="professor" type="text" placeholder="Digite o nome do professor" />
      </div>
      <button type="submit" class="btn-primary">Criar</button>
    </form>
  </div>
</template>

<style scoped>
.nova-disciplina-container {
  max-width: 500px;
  margin: auto;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
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
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2563eb;
}
</style>
