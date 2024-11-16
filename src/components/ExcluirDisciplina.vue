<!-- //src/components/ExcluirDisciplina.vue -->

<script setup>
const props = defineProps({
  disciplina: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['fechar'])

const excluirDisciplina = () => {
  console.log('Disciplina excluída:', props.disciplina.id)
  emit('fechar')
  // Aqui, implemente a lógica para excluir a disciplina no backend ou estado global.
}
</script>

<template>
  <div class="excluir-disciplina-container">
    <h2 class="section-title">Excluir Disciplina</h2>
    <p>Tem certeza que deseja excluir a disciplina "{{ props.disciplina.nome }}"?</p>
    <div class="form-actions">
      <button @click="excluirDisciplina" class="btn-danger">Excluir</button>
      <button @click="emit('fechar')" class="btn-secondary">Cancelar</button>
    </div>
  </div>
</template>

<style scoped>
.excluir-disciplina-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #dc2626;
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
