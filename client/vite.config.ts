import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const env = loadEnv("DEV", "../", "VITE_");
  const backendURL = `${env.VITE_BACKEND_URL || "http://localhost"}:${
    env.VITE_BACKEND_PORT || "3000"
  }`;
  console.log("Environment variables:", env);
  console.log("Using backend URL:", backendURL);
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
