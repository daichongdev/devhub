import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/devhub/',  // GitHub Pages 的仓库路径
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      buffer: 'buffer/',
    },
  },
  define: {
    'global': 'globalThis',
  },
})
