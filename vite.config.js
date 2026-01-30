import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Chemverse/',   // ⚠️ Repo name SAME hona chahiye
})
