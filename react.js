module.exports = {
	parserOptions: {
		ecmaFeatures: {jsx: true},
	},
	plugins: ['react-hooks'],
	extends: ['plugin:react/recommended', 'prettier/react'],
	rules: {
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhausitive-deps': 2,
	},
};
