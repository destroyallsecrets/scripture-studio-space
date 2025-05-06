import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["024fa0ca-aae5-4da0-85e3-90503779898c.lovableproject.com"], // Add this line
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
    outDir: 'dist', // Add this line to include node_modules in the build process
    lib: {
      entry: 'src/main.js',
      fileName: 'my-lib',
      formats: ['es']
    },
    rollupOptions: {
      external: [], // Remove the platform-specific module from the external list
    },
  }
}));