import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "build"
  },
  server: {
    port: 3000,
    proxy: {
      "/neutralino.js": "http://127.0.0.1:8080"
    }
  },
})
