import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    })
  ],
  optimizeDeps: {
    include: ['react-twitter-embed']
  },
  build: {
    commonjsOptions: {
      include: [/react-twitter-embed/, /node_modules/]
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-twitter-embed': ['react-twitter-embed']
        }
      }
    }
  }
});