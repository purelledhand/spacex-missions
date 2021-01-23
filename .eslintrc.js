module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/resolver': { 'node': { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] } },
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
    parser: 'babel-eslint',
  },
  ignorePatterns: ['node_modules/'],
};
