import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
    },
    fs: {
      allow: ['..'], // ✅ allows Vite to import outside ui/
    },
  },
  resolve: {
    alias: {
      '@notebook/ui': path.resolve(__dirname, 'src'),
      '@notebook/shared': path.resolve(__dirname, '../shared/src'),
    },
  },
})
