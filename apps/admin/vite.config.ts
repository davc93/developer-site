import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
