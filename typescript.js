module.exports = {
	extends: [
		"./config/typescript-eslint.js",
		"plugin:import/typescript",
		"prettier/@typescript-eslint",
	],
	rules: {
		"no-undef": 0, // TypeScript has it's own way to detect undefined variables
		"react/prop-types": 0, // TypeScript does this job
		"import/default": 0, // Conflicts with TypeScript esModuleInterop
		"import/no-unresolved": 0, // TypeScript does this job
	},
};
