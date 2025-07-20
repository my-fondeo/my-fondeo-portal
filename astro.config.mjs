// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svgr from 'vite-plugin-svgr';

import react from "@astrojs/react";
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
  base: '/',
  integrations: [react()],
  adapter: awsAmplify(),
});