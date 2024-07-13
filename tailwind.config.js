/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
	theme: {
		extend: {
			colors: {
				primary: '#537076',
				secondary: '#BEDEE4',
				comp1: '#D67935',
				comp2: '#E6F4F1',
			},
			borderRadius: {
				card: 'var(--card-border-radius)',
			},
			backgroundImage: {
				'temp-services-card': "url('../images/data-cable-wiring.jpeg')",
			},
		},
		important: true,
		plugins: [],
	},
};
