import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
  ],
  // server: {
  //   host: "127.0.0.1",
  //   port: 3000
  // },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@public", replacement: "/public" },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
