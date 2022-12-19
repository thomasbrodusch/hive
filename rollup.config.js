import typescript from "@rollup/plugin-typescript";

const outputOptions = {
  exports: "named",
  preserveModules: true,
  banner: `/*
   * Piupiu Library
   * https://github.com/thomasbrodusch/hive
   * (c) Thomas Brodusch (@thomasbrodusch)
   */`,
};

const config = {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      dir: "dist/cjs",
      ...outputOptions,
    },
    {
      format: "esm",
      dir: "dist/esm",
      ...outputOptions,
    },
  ],
  plugins: [typescript()],
};

export default config;
