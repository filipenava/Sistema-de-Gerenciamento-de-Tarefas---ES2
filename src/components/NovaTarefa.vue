<!-- //src/components/NovaTarefa.vue -->

<script setup>
import { ref } from 'vue'

const titulo = ref('')
const descricao = ref('')
const periodoEntrega = ref('')
const arquivo = ref(null)

const criarTarefa = () => {
  if (!titulo.value || !descricao.value || !periodoEntrega.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  console.log({
    titulo: titulo.value,
    descricao: descricao.value,
    periodoEntrega: periodoEntrega.value,
    arquivo: arquivo.value,
  })

  alert('Tarefa criada com sucesso!')
}
</script>

<template>
  <div class="nova-tarefa">
    <h2 class="section-title">Criar Nova Tarefa</h2>
    <form @submit.prevent="criarTarefa" class="form-container">
      <div class="form-group">
        <label for="titulo">Título:</label>
        <input id="titulo" type="text" v-model="titulo" placeholder="Digite o título da tarefa" />
      </div>
      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <textarea id="descricao" v-model="descricao" placeholder="Digite a descrição"></textarea>
      </div>
      <div class="form-group">
        <label for="periodoEntrega">Período de Entrega:</label>
        <input id="periodoEntrega" type="date" v-model="periodoEntrega" />
      </div>
      <div class="form-group">
        <label for="arquivo">Upload de Arquivo (opcional):</label>
        <input id="arquivo" type="file" @change="e => arquivo.value = e.target.files[0]" />
      </div>
      <button type="submit" class="btn-primary">Criar Tarefa</button>
    </form>
  </div>
</template>

<style scoped>
.nova-tarefa {
  max-width: 500px;
  margin: auto;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
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
