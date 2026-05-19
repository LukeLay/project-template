import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/template/',
  server: {
    //host: '10.10.10.151',
    host: 'localhost',
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
});
