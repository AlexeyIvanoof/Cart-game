/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,

    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
  
      "env": {
          "browser": true,
          "es6": true,
          "node": true
        },
        "extends": ["eslint:recommended", "prettier"],
        "plugins": [
          "prettier"
        ],
        "parserOptions": {
          "ecmaVersion": 2020
        },
        "rules": {
          "prettier/prettier": "error",
          "camelcase": [
            "error"
          ],
          "eqeqeq": [
            "error",
            "always"
          ]
        }
      }