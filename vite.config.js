import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import preact from '@preact/preset-vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [preact(),ViteImageOptimizer({
    jpg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 70,
    }
  })],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
