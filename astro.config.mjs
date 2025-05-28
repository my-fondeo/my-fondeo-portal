// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});
