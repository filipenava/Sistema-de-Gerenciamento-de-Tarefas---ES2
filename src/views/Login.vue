<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-card-title class="text-center">
            Login
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
                prepend-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                v-model="senha"
                label="Senha"
                type="password"
                required
                prepend-icon="mdi-lock"
              ></v-text-field>

              <v-select
                v-model="tipoUsuario"
                :items="tiposUsuario"
                label="Tipo de Usuário"
                required
                prepend-icon="mdi-account"
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="handleLogin">
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const senha = ref('')
const tipoUsuario = ref('')
const tiposUsuario = ['Aluno', 'Professor', 'Coordenador']

const handleLogin = () => {
  // Simulate login - In a real app, this would make an API call
  const userData = {
    email: email.value,
    tipo_usuario: tipoUsuario.value,
    nome: 'Usuário Teste'
  }
  
  authStore.setUser(userData)
  router.push('/')
}
</script>