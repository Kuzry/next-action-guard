import typescript from "rollup-plugin-typescript2";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: ["src/index.ts"],
  output: [
    {
      dir: "./dist",
      format: "esm",
      preserveModules: true,
      entryFileNames: "[name].mjs",
    },
  ],
  plugins: [typescript(), preserveDirectives()],
  external: [],
};
