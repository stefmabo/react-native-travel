module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'prettier/prettier': ['error', { bracketSpacing: true }],
    'object-curly-spacing': ['error', 'always'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '#*/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
