import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-findPrimeFactors/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
