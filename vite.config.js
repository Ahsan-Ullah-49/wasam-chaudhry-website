import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/wasam-chaudhry-website/",
  plugins: [
    tailwindcss(),
  ],
});
