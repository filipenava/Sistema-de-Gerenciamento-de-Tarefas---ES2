import { defineStore } from 'pinia'

export const useDisciplinasStore = defineStore('disciplinas', {
  state: () => ({
    disciplinas: [],
    currentDisciplina: null
  }),

  actions: {
    setDisciplinas(disciplinas) {
      this.disciplinas = disciplinas
    },

    setCurrentDisciplina(disciplina) {
      this.currentDisciplina = disciplina
    },

    addDisciplina(disciplina) {
      this.disciplinas.push(disciplina)
    },

    updateDisciplina(id, updates) {
      const index = this.disciplinas.findIndex(d => d.id === id)
      if (index !== -1) {
        this.disciplinas[index] = { ...this.disciplinas[index], ...updates }
      }
    }
  }
})