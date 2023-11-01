import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    outDir: 'dist', // 指定輸出目錄為 'dist'
  },
  base: '/coffee-shop/',
  resolve: {
    alias: {
      // 將 src設為絕對路徑
      '@': 'src',
    },
  },
});
