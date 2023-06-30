import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: './build'
    
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: [
      "src/**/*.jsx",
      "src/**/*.tsx",
      "src/**/*.js",
      "node_modules/**/*.js",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",
    ],
    exclude: [],
  },
  server: {
    open: true,
    port: 3000
  }
});
