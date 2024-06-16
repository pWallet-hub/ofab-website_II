import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-twitter-embed']
  },
  build: {
    commonjsOptions: {
      include: [/react-twitter-embed/, /node_modules/]
    }
  }
});