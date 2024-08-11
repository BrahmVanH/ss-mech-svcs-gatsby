/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
	theme: {
		extend: {
			colors: {
				primary: '#537076',
				primaryLight: '#537076ce',
				secondary: '#BEDEE4',
				comp1: '#D67935',
				comp2: '#E6F4F1',
				'home-hero-fill': '#5150507c',
				'thumbtack-review-star-fill': '#2db783',
				'services-dropdown-home-bg': '#537076ce',
				'services-dropdown-grad-stop-1': '#302e33',
				'services-dropdown-grad-stop-2': '#2e2b30',
				'services-dropdown-grad-stop-3': 'rgba(0, 0, 0, 0.811)',
				'services-dropdown-grad-stop-4': 'rgba(0, 0, 0, 0.811)',
			},
			borderRadius: {
				card: 'var(--card-border-radius)',
			},
			backgroundImage: {
				'tankless-hotwater-landscape': "url('../images/tankless-hotwater-landscape.jpg')",
			},
			fontFamily: {
				'thumbtack-reviews': 'Mark, Avenir, Helvetica, Arial, sans - serif',
			},
		},
		important: true,
		plugins: ['gatsby-plugin-postcss'],
	},
};
