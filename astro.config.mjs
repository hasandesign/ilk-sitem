import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro'; 

export default defineConfig({
  integrations: [
    react(),
    sanity({ 
      projectId: "yras2aub", 
      dataset: "production",
      useCdn: false,
      studioUrl: "/hasan-panel",
    }),
  ],
});