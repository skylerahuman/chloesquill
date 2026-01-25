/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'forest-green': '#2C5530',
				'warm-cedar': '#A45A52',
				'parchment-cream': '#F5F1E6',
				'espresso-brown': '#3B2B25'
			},
			fontFamily: {
				serif: ['Merriweather', 'serif'],
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
