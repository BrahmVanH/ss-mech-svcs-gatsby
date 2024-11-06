/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				xs: '375px',
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Ensure this is correctly defined
					foreground: 'hsl(var(--primary-foreground))',
				},
				primaryLight: '#537076ce',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				comp1: '#D67935',
				comp2: '#E6F4F1',
				'home-hero-fill': '#5150507c',
				'thumbtack-review-star-fill': '#2db783',
				'services-dropdown-home-bg': '#537076ce',
				'services-dropdown-grad-stop-1': '#302e33',
				'services-dropdown-grad-stop-2': '#2e2b30',
				'services-dropdown-grad-stop-3': 'rgba(0, 0, 0, 0.811)',
				'services-dropdown-grad-stop-4': 'rgba(0, 0, 0, 0.811)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				card: 'var(--card-border-radius)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backgroundImage: {
				'tankless-hotwater-landscape': 'url("../images/tankless-hotwater-landscape.jpeg")',
			},
			fontFamily: {
				'thumbtack-reviews': 'Mark, Avenir, Helvetica, Arial, sans - serif',
			},
		},
		important: 'true',
		plugins: ['gatsby-plugin-postcss'],
	},
	plugins: [require('tailwindcss-animate')],
};
