import { defineConfig } from "vitest/config";
export default defineConfig({
  resolve: { alias: { "@": "/src" } },
  test: {
    environment: "node",
    globals: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: ["tests/setup.ts"],
  },
});
