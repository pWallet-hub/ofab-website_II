import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs({
      requireReturnsDefault: 'auto',
      include: [
        /node_modules/,
        /react-twitter-embed/,
        /react-social-media-embed/
      ]
    })
  ],
  optimizeDeps: {
    include: ['react-twitter-embed', 'react-social-media-embed']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /react-twitter-embed/, /react-social-media-embed/]
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      'react-twitter-embed': 'react-twitter-embed/dist/index.es.js',
      'react-social-media-embed': 'react-social-media-embed/dist/index.es.js'
    }
  }
});