import typescript from "@rollup/plugin-typescript";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

const outputOptions = {
  sourcemap: true,
  preserveModules: true,
  exports: "named",
  banner: `/*
   * Piupiu Library
   * https://github.com/thomasbrodusch/piupiu
   * (c) Thomas Brodusch (@thomasbrodusch)
   */`,
};

const config = [
  {
    input: `src/index.js`,
    plugins: [typescript(), esbuild()],
    output: [
      {
        dir: `dist/cjs`,
        format: "cjs",
        ...outputOptions,
      },
      {
        dir: `dist/esm`,
        format: "es",
        ...outputOptions,
      },
    ],
  },
  {
    input: `src/index.js`,
    plugins: [dts()],
    output: {
      file: `dist/piupiu.d.ts`,
      format: "es",
    },
  },
];

export default config;
