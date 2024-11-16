<!-- //src/views/SolicitarMatriculaView.vue -->

<script setup>
import SolicitarMatricula from '../components/SolicitarMatricula.vue'
</script>

<template>
  <div class="solicitar-matricula-view">
    <h1 class="page-title">Solicitação de Matrícula</h1>
    <!-- Componente de solicitação de matrícula -->
    <SolicitarMatricula />
  </div>
</template>

<style scoped>
.solicitar-matricula-view {
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
