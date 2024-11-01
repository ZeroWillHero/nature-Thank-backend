import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "no-console": "warn",
    "no-constant-condition": "warn",
    "no-irregular-whitespace": "off",
    "no-prototype-builtins": "off",
    "no-async-promise-executor": "off",
    "no-inner-declarations": "off",
    "no-unsafe-negation": "off",
    "no-extra-boolean-cast": "off",
    "no-extra-semi": "off",
    "no-extra-parens": "off",
    "no-regex-spaces": "off",
  }}
];