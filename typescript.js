module.exports = {
	extends: [
		'./index.js',
		'./config/typescript-eslint.js',
		'plugin:import/typescript',
		'prettier/@typescript-eslint',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'no-undef': 0,
		'react/prop-types': 0,
		'import/no-unused-modules': 0,
	},
};
