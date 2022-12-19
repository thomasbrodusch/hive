import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
  plugins: [typescript()],
};
