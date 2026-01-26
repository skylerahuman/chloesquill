/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Brand color palette with shades
				forest: {
					50: '#f3f6f4',
					100: '#e6ede8',
					200: '#c0d8c6',
					300: '#9bc3a5',
					400: '#76ae83',
					500: '#2C5530', // Primary forest green
					600: '#234426',
					700: '#1a331d',
					800: '#122213',
					900: '#09110a',
					950: '#050905'
				},
				cedar: {
					50: '#faf6f5',
					100: '#f5edeb',
					200: '#e7d1cd',
					300: '#d9b5af',
					400: '#cb9991',
					500: '#A45A52', // Warm cedar accent
					600: '#834842',
					700: '#623631',
					800: '#422421',
					900: '#211210',
					950: '#110908'
				},
				parchment: {
					50: '#fefdfb',
					100: '#fdfbf7',
					200: '#F5F1E6', // Main parchment cream
					300: '#ede7d5',
					400: '#e5ddc4',
					500: '#ddd3b3',
					600: '#c9bb9a',
					700: '#b5a381',
					800: '#8c7f63',
					900: '#635a46',
					950: '#3a3529'
				},
				espresso: {
					50: '#f7f5f4',
					100: '#efebe9',
					200: '#dfd7d3',
					300: '#cfc3bd',
					400: '#bfafa7',
					500: '#7d5f56',
					600: '#5d4740',
					700: '#3B2B25', // Main espresso brown
					800: '#2d211c',
					900: '#1d100c',
					950: '#0f0806'
				},
				// Legacy color names for backward compatibility
				'forest-green': '#2C5530',
				'warm-cedar': '#A45A52',
				'parchment-cream': '#F5F1E6',
				'espresso-brown': '#3B2B25'
			},
			fontFamily: {
				serif: ['Merriweather', 'serif'],
				sans: ['Inter', 'sans-serif']
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem'
			},
			transitionDuration: {
				250: '250ms'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: []
};
