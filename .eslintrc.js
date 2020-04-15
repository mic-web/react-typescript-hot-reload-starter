module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
}
