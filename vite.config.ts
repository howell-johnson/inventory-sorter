import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { parserPlugin } from "./tools/parser";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/kaden-inventory/" : "/",
  plugins: [react(), parserPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
