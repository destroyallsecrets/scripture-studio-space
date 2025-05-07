import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["024fa0ca-aae5-4da0-85e3-90503779898c.lovableproject.com"]
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));