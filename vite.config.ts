
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Explicitly external modules that shouldn't be bundled
      external: [
        '@rollup/rollup-linux-x64-gnu',
        '@rollup/rollup-darwin-x64',
        '@rollup/rollup-darwin-arm64',
        '@rollup/rollup-win32-x64-msvc'
      ],
      output: {
        // Configure manual chunks to optimize bundling
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      }
    },
  }
}));
