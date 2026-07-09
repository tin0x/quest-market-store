import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vitePluginSvgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vitePluginSvgr(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/1_app'),
      '@pages': path.resolve(__dirname, 'src/2_pages'),
      '@widgets': path.resolve(__dirname, 'src/3_widgets'),
      '@features': path.resolve(__dirname, 'src/4_features'),
      '@entities': path.resolve(__dirname, 'src/5_entities'),
      '@shared': path.resolve(__dirname, 'src/6_shared'),
    },
  },
});
