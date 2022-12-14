import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://forkbomb.eu",
  integrations: [tailwind(), sitemap(), image(), react()]
});
