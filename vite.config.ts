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

    // Proxy the Neutralino.js client file to neutralino because it (undocumentedly) 
    // appends certain global variables to it. Loading it through vite causes
    // a connection error.
    proxy: {
      "/neutralino.js": "http://127.0.0.1:8080"
    }
  },
})
