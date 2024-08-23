import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname),
  base: "./",
  build: {
    outDir: '../../build/frontend'
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~/': `${pathSrc}/`
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "@/assets/scss/global.scss";`,
        },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
    },
  }
})

