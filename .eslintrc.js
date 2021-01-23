const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'camelcase': 'off',
    'import/extensions': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/naming-convention': 'off',
    'object-curly-newline': ['off', { // TODO: prettier와 상충하지 않는 룰 찾기
      'ObjectExpression': { 'multiline': true, 'minProperties': 4 },
      'ObjectPattern': { 'multiline': true, 'minProperties': 4 },
      'ImportDeclaration': { 'multiline': true, 'minProperties': 4 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 4 }
    }],
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', 'jsx', '.ts', '.tsx'] },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
        node: {
            paths: [path.resolve(__dirname, 'src')],
        },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks'
  ],
  ignorePatterns: ['node_modules/'],
};
