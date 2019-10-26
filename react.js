module.exports = {
	extends: ['./index.js', 'plugin:react/recommended', 'prettier/react'],
	parserOptions: {
		ecmaFeatures: {jsx: true},
	},
	plugins: ['react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 2,
	},
};
