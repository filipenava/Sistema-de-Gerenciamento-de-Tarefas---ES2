import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Define explicitamente o diretório de saída
    emptyOutDir: true, // Limpa a pasta de saída antes do novo build
  },
})