module.exports = {
	plugins: ['import'],
	rules: {
		'import/no-absolute-path': 2,
		'import/no-self-import': 2,
		'import/no-cycle': 2,
		'import/no-useless-path-segments': 2,
		// No files matching '...' were found.
		// 'import/no-unused-modules': [2, {unusedExports: true}],
		'import/export': 2,
		'import/no-deprecated': 2,
		'import/first': 2,
		'import/no-duplicates': 2,
		'import/extensions': 2,
		'import/order': [2, {'newlines-between': 'always'}],
		'import/newline-after-import': 2,
		'import/no-anonymous-default-export': 2,
	},
};
