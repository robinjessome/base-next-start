const storybookFiles = ['src/**/*.stories.{jsx,tsx,mdx}']

const ERROR = 'error'
const WARN = 'warn'

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	settings: {
		react: {
			version: 'detect',
		},
		tailwindcss: {
			callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva', 'tv'],
			config: 'tailwind.config.ts',
		},
	},
	plugins: ['simple-import-sort'],
	extends: [
		'eslint:recommended',
		'plugin:import/warnings',
		'plugin:tailwindcss/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
		'plugin:@next/next/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'no-empty-pattern': 'off',
		'no-console': WARN,
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-unexpected-multiline': ERROR,
		'import/no-duplicates': [WARN, { 'prefer-inline': true }],
		'import/order': [
			WARN,
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				pathGroups: [{ pattern: '#/**', group: 'internal' }],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			},
		],
	},
	overrides: [
		{
			// TS and TSX Files
			extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
			files: ['*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/consistent-type-imports': [
					WARN,
					{
						disallowTypeAnnotations: true,
						fixStyle: 'inline-type-imports',
						prefer: 'type-imports',
					},
				],
				'@typescript-eslint/no-unused-vars': [
					ERROR,
					{
						args: 'after-used',
						caughtErrors: 'all',
						ignoreRestSiblings: true,
						varsIgnorePattern: '^ignored',
					},
				],
				'@typescript-eslint/no-misused-promises': [ERROR, { checksVoidReturn: false }],
				'@typescript-eslint/no-floating-promises': ERROR,
				'import/consistent-type-specifier-style': [WARN, 'prefer-inline'],
			},
		},
		{
			// React Files
			extends: ['plugin:react/recommended'],
			files: ['*.tsx', '*.js?(x)'],
			rules: {
				'react/jsx-pascal-case': 'off',
				'react/prop-types': 'off',
				'react/react-in-jsx-scope': 'off',
			},
		},
		{
			// React Hooks Files
			extends: ['plugin:react-hooks/recommended'],
			files: ['*.ts?(x)', '*.js?(x)'],
			rules: {
				'react-hooks/exhaustive-deps': WARN,
				'react-hooks/rules-of-hooks': ERROR,
			},
		},
		{
			// Storybook Files
			files: storybookFiles,
			extends: ['plugin:storybook/recommended'],
			rules: {
				'import/no-anonymous-default-export': 'off',
			},
		},
	],
}
