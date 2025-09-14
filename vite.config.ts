import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('gsap') || id.includes('framer-motion')) {
              return 'animation-libs';
            }
            if (id.includes('three') || id.includes('ogl')) {
              return 'three-libs';
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-libs';
            }
            if (id.includes('i18next')) {
              return 'i18n';
            }
            return 'vendor';
          }
        }
      }
    },
    // Enable source maps for debugging but optimize for production
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Minify options
    minify: 'terser'
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      'i18next',
      'lucide-react'
    ],
    exclude: [
      // Exclude heavy libraries from pre-bundling to allow lazy loading
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'ogl',
      'gsap'
    ]
  }
})
