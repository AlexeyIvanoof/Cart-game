/* eslint-disable prettier/prettier */
/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": "error",
    camelcase: ["error"],
    eqeqeq: ["error", "always"],
  },
};
