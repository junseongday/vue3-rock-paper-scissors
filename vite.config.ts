import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@': resolve(__dirname, 'src'),
      // '@components': resolve(__dirname, 'src/components'),
      // '@app_modules': resolve(__dirname, 'src/modules'),
      '~/': `${resolve(__dirname, './src')}/`,
      // '@pages': resolve(__dirname, 'src/pages'),
      // '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [vue()],
})
