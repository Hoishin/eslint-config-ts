module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	plugins: ['prefer-arrow'],
	extends: [
		'./config/eslint.js',
		'./config/import.js',
		'./config/unicorn.js',
		'prettier',
		'prettier/unicorn',
	],
	rules: {
		'prefer-arrow/prefer-arrow-functions': 2,
	},
};
