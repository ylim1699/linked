import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/linked/", 
  root: "src/",

  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        discover: resolve(__dirname, "src/discover.html"),
        calendar: resolve(__dirname, "src/calendar.html"),
        signup: resolve(__dirname, "src/signup.html"),
      }
    }
  }
});

