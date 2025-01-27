import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { 
    host: 'revendarm.com.br',
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        // Impede a geração de hash nos arquivos
        entryFileNames: 'assets/[name].js', // Para arquivos JS
        chunkFileNames: 'assets/[name].js', // Para arquivos de chunk JS
        assetFileNames: 'assets/[name].[ext]' // Para arquivos CSS e outros assets
      }
    }
  }
})
