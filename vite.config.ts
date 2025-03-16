import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SV-DOM/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://ihor-prodan.github.io/SV-DOM/",
        changeOrigin: true,
      }
    },
  }
})
