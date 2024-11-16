<!-- //src/views/GerenciarUsuariosView.vue -->

<script setup>
import { ref } from 'vue'
import GerenciarUsuarios from '../components/GerenciarUsuarios.vue'
import EditarUsuario from '../components/EditarUsuario.vue'

const showModal = ref(false) // Controle para exibir o modal
const usuarioSelecionado = ref(null) // Armazena o usuário selecionado para edição

const abrirModal = (usuario) => {
  usuarioSelecionado.value = usuario // Armazena o usuário selecionado
  showModal.value = true // Exibe o modal
}

const fecharModal = () => {
  usuarioSelecionado.value = null // Limpa o usuário selecionado
  showModal.value = false // Fecha o modal
}
</script>

<template>
  <div class="gerenciar-usuarios-view">
    <h1 class="page-title">Gerenciar Usuários</h1>
    <GerenciarUsuarios @editarUsuario="abrirModal" />

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-container">
        <EditarUsuario :usuario="usuarioSelecionado" @fechar="fecharModal" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gerenciar-usuarios-view {
  max-width: 800px;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
