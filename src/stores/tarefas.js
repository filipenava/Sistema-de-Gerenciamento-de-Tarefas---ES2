import { defineStore } from 'pinia'

export const useTarefasStore = defineStore('tarefas', {
  state: () => ({
    tarefas: []
  }),

  actions: {
    setTarefas(tarefas) {
      this.tarefas = tarefas
    },

    addTarefa(tarefa) {
      this.tarefas.push(tarefa)
    },

    updateTarefa(id, updates) {
      const index = this.tarefas.findIndex(t => t.id === id)
      if (index !== -1) {
        this.tarefas[index] = { ...this.tarefas[index], ...updates }
      }
    },

    getTarefasByDisciplina(disciplinaId) {
      return this.tarefas.filter(t => t.disciplina_id === disciplinaId)
    }
  }
})