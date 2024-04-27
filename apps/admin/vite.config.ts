import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    }
  } ,
  plugins: [ react() ],
  build: {
    rollupOptions: {
      external: [
        "ui-styles/src/variables.css",
        "ui-styles/src/animations.css",
        "ui-styles/src/base.css",

      ],
    },
  },
})
