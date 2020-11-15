module.exports = {
	extends: [
		"./config/core.js",
		"./config/import.js",
		"./config/unicorn.js",
		"prettier",
		"prettier/unicorn",
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	plugins: ["prefer-arrow"],
	rules: {
		"prefer-arrow/prefer-arrow-functions": 2,
	},
};
