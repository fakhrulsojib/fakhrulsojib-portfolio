import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows the server to listen on all network interfaces
    port: 5173,        // Optional: explicitly specify the port (default is 5173)
  },
})
