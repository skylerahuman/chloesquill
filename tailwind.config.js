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
					50: '#fff8f2',
					100: '#ffefe6',
					200: '#ffdcc9',
					300: '#ffbf99',
					400: '#ff955c',
					500: '#D94E18', // DEEPER BURNT ORANGE
					600: '#C0370A', // RUST
					700: '#912708',
					800: '#73210d',
					900: '#401309'
				},
				ink: {
					800: '#1e1b1b',
					900: '#0a0909'
				},
				paper: {
					100: '#fcfbf9', // Fresh Paper
					200: '#f2eee6', // Aged Newsprint
					300: '#e6dfd1'
				},
				brass: {
					light: '#fbf4b6',
					base: '#d4af37',
					dark: '#aa8c2c'
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
				serif: ['Cormorant Garamond', 'Merriweather', 'serif'],
				sans: ['Montserrat', 'Inter', 'sans-serif'],
				hand: ['La Belle Aurore', 'cursive']
			},
			backgroundImage: {
				noise:
					"url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.06%22/%3E%3C/svg%3E')"
			},
			animation: {
				float: 'float 8s ease-in-out infinite',
				swing: 'swing 1.5s cubic-bezier(0.45, 0, 0.55, 1) forwards',
				sway: 'sway 5s ease-in-out infinite',
				flicker: 'flicker 5s infinite',
				dust: 'dust 60s linear infinite',
				'dust-dense': 'dust 40s linear infinite', /* Faster, denser feel */
				'rise-steam': 'riseSteam 4s ease-in infinite',
				'rise-fire': 'riseFire 3s ease-out infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				swing: {
					'0%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(25deg)' },
					'40%': { transform: 'rotate(-15deg)' },
					'60%': { transform: 'rotate(10deg)' },
					'80%': { transform: 'rotate(-5deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				sway: {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				},
				flicker: {
					'0%, 100%': { opacity: '0.97' },
					'10%': { opacity: '0.90' },
					'15%': { opacity: '0.97' },
					'50%': { opacity: '0.94' },
					'80%': { opacity: '0.98' }
				},
				dust: {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '20% 100%' }
				},
				riseSteam: {
					'0%': { transform: 'translateY(100%) scale(1)', opacity: '0' },
					'20%': { opacity: '0.4' },
					'100%': { transform: 'translateY(-20%) scale(1.5)', opacity: '0' }
				},
				riseFire: {
					'0%': { transform: 'translateY(100%) scale(0.8)', opacity: '0' },
					'20%': { opacity: '0.5' },
					'100%': { transform: 'translateY(-10%) scale(1.2)', opacity: '0' }
				}
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem'
			},
			transitionDuration: {
				250: '250ms'
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: []
};
