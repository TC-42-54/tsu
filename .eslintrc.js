module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', "import-monorepo"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { "vars": "all", "args": "none" }],
    'newline-after-var': 'error',
    'lines-around-directive': 'error',
    'newline-before-return': 'error',
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import-monorepo/no-src-or-build": ["warn", {
      onlyFrom: ['./packages'] // not required
    }]
  },
};
