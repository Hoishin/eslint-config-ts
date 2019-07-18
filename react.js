module.exports = {
	parserOptions: {
		ecmaFeatures: {jsx: true},
	},
	plugins: ['react-hooks'],
	extends: ['plugin:react/recommended', 'prettier/react'],
	rules: {
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 2,
	},
};
