import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Example: require "use client" for files using client hooks (if plugin exists)
      // "next/no-async-client-component": "error",
      // Add your custom or recommended rules here
      "no-console": "warn",
      "next/no-async-client-component": "error",
    },
  },
];

export default eslintConfig;
