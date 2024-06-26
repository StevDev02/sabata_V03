import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://sabata.com",
  integrations: [
    react(),
    compressor({ gzip: true, brotli: false }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date("2024-06-11"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
        },
      },
    }),
  ],
  security: {
    checkOrigin: true,
  },
  output: "server",
  adapter: vercel(),
});
