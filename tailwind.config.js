/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
	theme: {
		extend: {
			colors: {
				primary: '#537076',
			},
			borderRadius: {
				card: 'var(--card-border-radius)',
			},
		},
		plugins: [],
	},
};
