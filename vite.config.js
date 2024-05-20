import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

//  define path here
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve("./src"),
    },
  },
});
