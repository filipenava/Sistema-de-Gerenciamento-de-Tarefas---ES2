<!-- //src/views/AprovarMatriculaView.vue -->

<script setup>
import AprovarMatricula from '../components/AprovarMatricula.vue'
</script>

<template>
  <div class="aprovar-matricula-view">
    <h1 class="page-title">Aprovar Matrículas</h1>
    <!-- Lista de solicitações de matrícula pendentes -->
    <AprovarMatricula />
  </div>
</template>

<style scoped>
.aprovar-matricula-view {
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
