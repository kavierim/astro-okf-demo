// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kavierim.github.io/astro-okf-demo/',
  base: '/astro-okf-demo/',
  vite: {
    plugins: [tailwindcss()]
  }
});
