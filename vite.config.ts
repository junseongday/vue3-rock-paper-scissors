import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON == "true" ? "./" : "/vue3-rock-paper-scissors/",
  server: {
    port: 4000,
    proxy: {
      "/sample": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sample/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "./src")}/`,
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [vue()],
});
