import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // 自定义域名使用根路径
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
