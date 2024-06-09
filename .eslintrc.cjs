'use strict';

/**
 * To use this configuration, you need to install the following dependencies:
 * eslint@^8.57.0 @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-x eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-unicorn eslint-plugin-unused-imports@^3.2.0
 */

/** @type {Partial<import('eslint').Linter.RulesRecord>} */
const stylisticRules = {
  '@stylistic/max-len': [
    'warn',
    {
      code: 80,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  '@stylistic/indent': [ 'error', 2 ],
  '@stylistic/semi': [ 'error', 'always' ],
  '@stylistic/semi-style': [ 'error', 'last' ],
  '@stylistic/quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
      avoidEscape: false,
    },
  ],
  '@stylistic/quote-props': [ 'error', 'as-needed' ],
  '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
  // known issue with jsx comma dangle
  '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/comma-style': [ 'error', 'last' ],
  '@stylistic/array-bracket-newline': [ 'error', 'consistent' ],
  '@stylistic/array-element-newline': [
    'error',


    {
      multiline: true,
      minItems: 4,
    },
  ],
  '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
  '@stylistic/comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  '@stylistic/object-curly-spacing': [ 'error', 'always' ],
  '@stylistic/no-trailing-spaces': [ 'error', { skipBlankLines: true } ],
  '@stylistic/type-generic-spacing': [ 'error' ],
  '@stylistic/wrap-regex': 'error',
  '@stylistic/object-curly-newline': [
    'error',
    {
      multiline: true,
      minProperties: 4,
      consistent: true,
    },
  ],
  // Prettier does not strictly enforce closing tag behavior rather ignores self closing tags
  '@stylistic/jsx-closing-bracket-location': [
    'error',
    {
      nonEmpty: 'tag-aligned',
      selfClosing: 'after-props',
    },
  ],
  '@stylistic/arrow-parens': [ 'error', 'always' ],
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import-x/recommended',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: [ 'dist', 'node_modules' ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    '@stylistic',
    'react-refresh',
    'unicorn',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-refresh/only-export-components': [
      'warn', { allowConstantExport: true },
    ],
    'unicorn/filename-case': [
      'error', { cases: { kebabCase: true, pascalCase: true } },
    ],
    ...stylisticRules,
  },
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: [ '.eslintrc.*js' ],
      env: { node: true },
    },
    {
      files: [ '.vite(|st).(js|ts)' ],
      env: { node: true },
    },
    {
      files: [ '*.d.ts' ],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ],
};
