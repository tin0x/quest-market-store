import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vitePluginSvgr from 'vite-plugin-svgr';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vitePluginSvgr(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@app': path.resolve(process.cwd(), 'src/1_app'),
      '@pages': path.resolve(process.cwd(), 'src/2_pages'),
      '@widgets': path.resolve(process.cwd(), 'src/3_widgets'),
      '@features': path.resolve(process.cwd(), 'src/4_features'),
      '@entities': path.resolve(process.cwd(), 'src/5_entities'),
      '@shared': path.resolve(process.cwd(), 'src/6_shared'),
    },
  },
});
