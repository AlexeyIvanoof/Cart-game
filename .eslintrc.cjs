/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended',"eslint:recommended", "prettier"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint',"prettier"],
    root: true,

    /*/"editor.codeActionsOnSave": {
      "source.fixAll": true
    },/*/
  
      "env": {
          "browser": true,
          "es6": true,
          "node": true
        },
       
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