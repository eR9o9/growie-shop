import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/growie-shop/",
  plugins: [react()],
  server: {
    allowedHosts: ["mile-puerto-scripts-keno.trycloudflare.com"],
  },
});
