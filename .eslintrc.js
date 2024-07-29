/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:import/warnings', 'plugin:tailwindcss/recommended', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    // eslint
    'eqeqeq': ['error', 'smart'],
    'no-console': 'error',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'warn',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-label': 'warn',
    'no-implicit-globals': 'error',
    'no-lonely-if': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-negated-condition': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['break', 'cjs-export', 'cjs-import', 'class', 'continue', 'do', 'for', 'function', 'if', 'return'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
    ],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['classnames', 'clsx', 'cn', 'tv'],
      config: require.resolve("tailwind.config.js"),
    },
  },
  overrides: [
    {
      files: ['*.stories.{js,jsx}'],
      rules: {
        'no-console': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'inline-type-imports',
          },
        ],
      },
    },
    {
      files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
      rules: {
        'no-empty-function': 'off',
      },
    },
  ],
}
