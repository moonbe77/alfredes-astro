import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      pt: "es",
    },
  },
});
