import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import fs from 'fs'

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
    https: {
      key: fs.readFileSync('./banter.key'),
      cert: fs.readFileSync('./banter.cert'),
    },
    host: '0.0.0.0',
    hmr: {
      host: `${process.env.FRONTEND_BASE}`,
    },
    port: parseInt(process.env.FRONTEND_PORT ?? '3000'),
    watch: {
      usePolling: true,
      interval: 1000,
      atomic: 50
    }
  }
})
