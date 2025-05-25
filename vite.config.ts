import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dalia/' // nombre del repositorio si usas GitHub Pages
})
