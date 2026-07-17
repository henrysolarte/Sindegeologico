import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        juntadirectiva: resolve(__dirname, 'juntadirectiva.html'),
      },
    },
  },
})