<!-- //src/components/EntregaTarefa.vue -->

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tarefa: {
    type: Object,
    required: true,
  },
})

const arquivo = ref(null)
const isLoading = ref(false)

const entregarTarefa = async () => {
  if (!arquivo.value) {
    alert('Por favor, selecione um arquivo para entrega.')
    return
  }

  isLoading.value = true
  try {
    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log({
      tarefaId: props.tarefa.id,
      arquivo: arquivo.value,
    })
    alert(`Tarefa "${props.tarefa.titulo}" entregue com sucesso!`)
    $emit('fechar') // Fecha o modal após a entrega
  } catch (error) {
    alert('Erro ao entregar a tarefa. Tente novamente.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="entrega-tarefa">
    <h2 class="section-title">Entregar Tarefa</h2>
    <p><strong>Título:</strong> {{ tarefa.titulo }}</p>
    <p><strong>Descrição:</strong> {{ tarefa.descricao }}</p>
    <form @submit.prevent="entregarTarefa" class="form-container">
      <div class="form-group">
        <label for="arquivo">Upload de Arquivo:</label>
        <input id="arquivo" type="file" @change="e => (arquivo.value = e.target.files[0])" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-primary" :disabled="isLoading">
          <span v-if="isLoading">Enviando...</span>
          <span v-else>Entregar</span>
        </button>
        <button type="button" class="btn-secondary" @click="$emit('fechar')" :disabled="isLoading">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>
