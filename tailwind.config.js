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
			},
			borderRadius: {
				card: 'var(--card-border-radius)',
			},
			backgroundImage: {
				'temp-services-card': "url('../images/data-cable-wiring.jpeg')",
				'home-hero-img-mobile': "url('../images/multi-meter-testing-iphone-res.jpg')",
			},
			fontFamily: {
				'thumbtack-reviews': 'Mark, Avenir, Helvetica, Arial, sans - serif',
			},
		},
		important: true,
		plugins: [],
	},
};
