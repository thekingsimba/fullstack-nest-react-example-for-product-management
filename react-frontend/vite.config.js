import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isProduction = command === "build";
  return {
    base: "/ennov-test/",
    mode: isProduction ? "production" : "development",
    loader: { ".js": "jsx" },
    plugins: [react()],
    server: {
      host: "localhost",
      open: true,
      port: 3100,
      headers: {
        "Strict-Transport-Security": "max-age=86400; includeSubDomains",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Content-Security-Policy": "upgrade-insecure-requests",
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
      commonjsOptions: {
        include: [/node_modules/],
      },
    },
    resolve: {
      alias: {
        "@": "/src",
        src: "/src",
        react: "react",
        "react-dom": "react-dom",
      },
    },
  };
});
