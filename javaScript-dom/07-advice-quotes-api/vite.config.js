import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/07-advice-quotes-api/',
  //   build: {
  //     rollupOptions: {
  //       input: {
  //         // main: resolve(__dirname, "index.html"),
  //       },
  //     },
  //   },
  build: {
    target: "ES2022", // <--------- ✅✅✅✅✅✅
  },
});
