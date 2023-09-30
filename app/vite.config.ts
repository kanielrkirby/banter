import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer()
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      host: `${process.env.FRONTEND_HOST}:${process.env.FRONTEND_PORT}`,
    },
    port: parseInt(process.env.FRONTEND_PORT ?? '3000'),
    watch: {
      usePolling: true,
      interval: 1000,
      atomic: 50
    }
  }
})
