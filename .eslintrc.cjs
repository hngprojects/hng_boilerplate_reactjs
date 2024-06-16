// @ts-check

/**
 * To use this configuration, you need to install the following dependencies:
 *
 * eslint@^8.57.0 @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-x eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-unicorn eslint-plugin-unused-imports@^3.2.0 prettier eslint-config-prettier eslint-plugin-prettier @ianvs/prettier-plugin-sort-imports
 *
 * Also replicate the .prettierrc.cjs file in the root of your project.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import-x/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:vitest/all",
  ],
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-refresh",
    "unicorn",
    "unused-imports",
    "vitest",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "unicorn/filename-case": [
      "error",
      { cases: { kebabCase: true, pascalCase: true } },
    ],
  },
  settings: {
    "import-x/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: { version: "detect" },
    vitest: { typecheck: true },
  },
  overrides: [
    {
      files: [".eslintrc.*js"],
      env: { node: true },
    },
    {
      files: [".vite(|st).(js|ts)"],
      env: { node: true },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
};
