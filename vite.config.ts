import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
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
  build: {
    minify: "terser",
    terserOptions: {
      //detail to look https://terser.org/docs/api-reference#compress-options
      compress: {
        drop_console: false,
        pure_funcs: ["console.log", "console.info"],
        drop_debugger: true,
      },
    },
  },
});
