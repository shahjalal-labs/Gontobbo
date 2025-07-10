import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteLoggerPlugin from "./vite.logger.plugin.js";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteLoggerPlugin()],
  server: {
    watch: {
      ignored: ["src/console/**"], // ignore log or json files
    },
  },
});
