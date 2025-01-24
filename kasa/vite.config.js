import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kasa/",
  server: {
    open: true, // Ouvre automatiquement la page dans le navigateur
  },
});
