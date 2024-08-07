const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
	plugins: [
		tailwindcss,
		autoprefixer,
		postcssPresetEnv({ stage: 0 }), // Example: Use postcss-preset-env for modern CSS features
	],
};
