// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

const sharedTsRules = {
  // TODO: re-enable once the codebase is migrated to standalone components / inject()
  "@angular-eslint/prefer-standalone": "off",
  "@angular-eslint/prefer-on-push-component-change-detection": "off",
  "@angular-eslint/prefer-inject": "off",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/dot-notation": "off",
  "@typescript-eslint/explicit-member-accessibility": [
    "off",
    {
      accessibility: "explicit",
    },
  ],
  "brace-style": ["error", "1tbs"],
  "id-blacklist": "off",
  "id-match": "off",
  "no-underscore-dangle": "off",
};

module.exports = defineConfig([
  {
    ignores: ["projects/**/*"],
  },
  {
    files: ["src/**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: ["src/tsconfig.app.json", "src/tsconfig.spec.json"],
      },
    },
    rules: {
      ...sharedTsRules,
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["e2e/**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["e2e/tsconfig.e2e.json"],
      },
    },
    rules: sharedTsRules,
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
