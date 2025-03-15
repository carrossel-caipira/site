import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "assets", // Certifique-se de que os assets estão sendo colocados na pasta correta
  },
})
