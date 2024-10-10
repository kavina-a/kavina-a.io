import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use '/' for root URL, which is appropriate for custom domains
  plugins: [react()],
})
