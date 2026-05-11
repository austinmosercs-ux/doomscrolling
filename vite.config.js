import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/doomscrolling/',
  server: {
    port: 3000
  }
})
