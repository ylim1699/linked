import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/linked/", 
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: "src/index.html",
        discover: "src/discover.html",
        calendar: "src/calendar.html",
      }
    }
  }
});
