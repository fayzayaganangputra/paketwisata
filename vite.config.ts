import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/paketwisata/', // 👈 penting untuk GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
