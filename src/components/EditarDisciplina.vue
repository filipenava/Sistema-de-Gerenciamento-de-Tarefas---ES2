<!-- //src/components/EditarDisciplina.vue -->

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  disciplina: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['fechar'])

const nome = ref('')
const semestre = ref('')
const professor = ref('')

// Sincronizar os valores da disciplina quando ela for passada como prop
watch(
  () => props.disciplina,
  (novaDisciplina) => {
    if (novaDisciplina) {
      nome.value = novaDisciplina.nome
      semestre.value = novaDisciplina.semestre
      professor.value = novaDisciplina.professor
    }
  },
  { immediate: true }
)

const atualizarDisciplina = () => {
  if (!nome.value || !semestre.value || !professor.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }
  console.log('Disciplina atualizada:', { nome: nome.value, semestre: semestre.value, professor: professor.value })
  emit('fechar')
  // Aqui, implemente a lógica para atualizar a disciplina no backend ou estado global.
}
</script>

<template>
  <div class="editar-disciplina-container">
    <h2 class="section-title">Editar Disciplina</h2>
    <form @submit.prevent="atualizarDisciplina" class="form-container">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input id="nome" v-model="nome" type="text" />
      </div>
      <div class="form-group">
        <label for="semestre">Semestre:</label>
        <input id="semestre" v-model="semestre" type="text" />
      </div>
      <div class="form-group">
        <label for="professor">Professor:</label>
        <input id="professor" v-model="professor" type="text" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-primary">Salvar Alterações</button>
        <button type="button" class="btn-secondary" @click="emit('fechar')">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.editar-disciplina-container {
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

.form-actions {
  display: flex;
  justify-content: space-between;
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

.btn-secondary {
  background-color: #ccc;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #bbb;
}
</style>
