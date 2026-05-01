import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P3473',
  trailingSlash: 'never',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
