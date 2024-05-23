module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "@typescript-eslint/quotes": 'off',
    "quotes-props": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/space-before-function-paren": "off"
  }
}
