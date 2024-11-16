<!-- //src/views/Dashboard.vue -->

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Dashboard</h1>
        <p>Bem-vindo, {{ authStore.user?.nome }}</p>
      </v-col>
    </v-row>

    <!-- Cards Resumo -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Usuários Cadastrados</v-card-title>
          <v-card-text>45</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Disciplinas</v-card-title>
          <v-card-text>12</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Tarefas Pendentes</v-card-title>
          <v-card-text>8</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Gráfico Exemplo -->
    <v-row class="mt-6">
      <v-col cols="12">
        <h2 class="text-h5">Progresso Semanal</h2>
        <canvas id="weeklyProgressChart"></canvas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

const authStore = useAuthStore()

const renderChart = () => {
  const ctx = document.getElementById('weeklyProgressChart').getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [
        {
          label: 'Tarefas Concluídas',
          data: [3, 5, 7, 2, 8, 6, 10],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  })
}

onMounted(() => {
  renderChart()
})
</script>
