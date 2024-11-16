<!-- //src/views/QuadroSemanalView.vue -->

<script setup>
import QuadroSemanal from '../components/QuadroSemanal.vue'
</script>

<template>
  <div class="quadro-semanal-view">
    <h1 class="page-title">Quadro Semanal de Tarefas</h1>
    <!-- Exibição do quadro semanal -->
    <QuadroSemanal />
  </div>
</template>

<style scoped>
.quadro-semanal-view {
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
</style>
