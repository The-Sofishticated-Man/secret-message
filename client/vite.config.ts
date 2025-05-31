import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const backendURL = loadEnv("DEV", "../", "VITE_").VITE_BACKEND_URL;
  return {
    plugins: [react()],
    envDir: "../",
    base: "./",
    server: {
      proxy: {
        // Proxy all requests to the backendURL without any path rewrite
        "/api": {
          target: backendURL,
          changeOrigin: true,
          secure: false, // Set to true if your backend uses HTTPS
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
