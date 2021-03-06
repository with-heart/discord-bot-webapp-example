/** link to a package tsconfig.json file */
const tsc = (name) => `./${name}/tsconfig.json`

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:unicorn/recommended'],
  rules: {
    'unicorn/no-array-reduce': ['error', {allowSimpleOperations: true}],
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: 'webapp/**',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          tsc('bot'),
          tsc('db'),
          tsc('webapp'),
        ],
        tsConfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
