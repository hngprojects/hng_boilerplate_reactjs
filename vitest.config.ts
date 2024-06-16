import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      reporters: ["default", "html"],
      coverage: {
        enabled: true,
        exclude: ["node_modules/", "src/test/"],
        include: ["src/**/*.{js,jsx,ts,tsx}"],
        provider: "istanbul",
        reporter: ["text", "json-summary", "json", "html"],
        reportOnFailure: true,
      },
    },
  }),
);
