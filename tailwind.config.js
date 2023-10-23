const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require('tailwindcss/plugin')
import colors from 'tailwindcss/colors';


/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: {
		relative: true,
		files: [
      './src/**/*.astro', './src/**/*.js'
		],
	},
	safelist: ['prose', 'prose-sm', 'm-auto'],
	variants: {
		extend: {
			visibility: ['group-hover'],
		},
	},
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 2s linear infinite',
			},
			containers: {
				mc: '820px',
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
			},
			fontSize: {
				xs: ['10px', '14px'],
				sm: ['12px', '16px'],
				base: ['14px', '20px'],
				'base-long': ['14px', '22px'],
				lg: ['16px', '22px'],
				xl: ['18px', '24px'],
				'2xl': ['20px', '26px'],
				'2.5xl': ['24px', '32px'],
				'4xl': ['30px', '36px'],
				'5xl': ['36px', '44px'],
			},
			colors: {
				// Neutrals
				black: '#000000',
				white: '#ffffff',
				// Electric Violet
				purple: {
				  25: '#FDF9FF',
				  50: '#F9F7FE',
				  100: '#DFD5FC',
				  200: '#CFBFFA',
				  300: '#9E80F6',
				  400: '#8E6AF4',
				  500: '#6E40F1',
				  600: '#6A30F6',
				  700: '#5C1FE2',
				  800: '#4C19BE',
				  900: '#41179B',
				  950: '#311C6B',
				  1000: '#1F1E3D',
				},
				// Hibiscus
				pink: {
				  50: '#FEF8FB',
				  100: '#FBDCEE',
				  200: '#F9CAE5',
				  300: '#F296CC',
				  400: '#F084C3',
				  500: '#EC61B2',
				  600: '#E41E8B',
				  700: '#C61070',
				  800: '#A4105C',
				  900: '#88134F',
				  950: '#4F203B',
				},
				//Sunrise
				yellow: {
				  50: '#FFF6E1',
				  100: '#FFEDC4',
				  200: '#FFDA88',
				  300: '#FFD16A',
				  400: '#FFC84D',
				  500: '#FFBF2F',
				  600: '#DBA428',
				  700: '#B68822',
				  800: '#926D1B',
				  900: '#49370D',
				  950: '#392F10',
				},
				// UI Palette
				// Gray
				gray: {
				  50: '#F9FAFB',
				  100: '#F3F4F6',
				  200: '#E5E7EB',
				  300: '#D1D5DB',
				  400: '#9CA3AF',
				  500: '#6B7280',
				  600: '#4B5563',
				  700: '#374151',
				  800: '#1F2937',
				  900: '#111827',
				  950: '#030712',
				},
				// Orange Peel
				orange: {
				  50: '#FFFBEA',
				  100: '#FFF2C5',
				  200: '#FFE685',
				  300: '#FFD246',
				  400: '#FFBD1B',
				  500: '#FF9900',
				  600: '#E27200',
				  700: '#BB4D02',
				  800: '#983B08',
				  900: '#7C310B',
				  950: '#481700',
				},
				// Monstera
				green: {
				  50: '#EAF8F1',
				  100: '#BFEBD6',
				  200: '#94DDBA',
				  300: '#69CF9E',
				  400: '#49C589',
				  500: '#29BB75',
				  600: '#229F63',
				  700: '#1C8352',
				  800: '#145E3A',
				  900: '#104B2F',
				  950: '#0C3823',
				},
				// High Tide
				blue: {
				  50: '#E8F2FA',
				  100: '#B9D8EF',
				  200: '#8ABEE4',
				  300: '#5BA4DA',
				  400: '#4397D5',
				  500: '#147ECA',
				  600: '#1064A2',
				  700: '#0E588D',
				  800: '#0C4B79',
				  900: '#0A3F65',
				  950: '#06263D',
				},
				// Sunburn
				red: {
				  50: '#FBEAE7',
				  100: '#F3C0B6',
				  200: '#EB9586',
				  300: '#E8806E',
				  400: '#E0563D',
				  500: '#D82C0D',
				  600: '#B8250B',
				  700: '#A2210A',
				  800: '#8C1D08',
				  900: '#6C1607',
				  950: '#410D04',
				},
			},
			height: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh',
			  },
			  maxHeight: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh',
			  },
			  minWidth: {
				'1/2': '50%',
				9: '36px',
			  },
			  screens: {
				'3xl': '1660px',
			  },
			  zIndex: {
				normal: '10',
				loader: '15',
				sidebar: '20',
				discover_search: '25',
				supplier_search: '25',
				fullscreen: '30',
				header: '40',
				drawer: '50',
				dropdown: '60',
				modal: '70',
				flash: '80',
			},
			// Consolidated Text Colors
			textColor: {
				'primary': colors.purple[950],
				'secondary': 'rgba(49, 28, 107, 0.9)',
				'tertiary': colors.purple[900],
				'accent': colors.purple[500],
				'disabled': 'rgba(49, 28, 107, 0.5)',
				'ui-info': colors.blue[900],
				'ui-positive': colors.green[900],
				'ui-negative': colors.red[900],
				'ui-warning': colors.orange[900],
				'ui-brand': colors.purple[950],
				'ui-system': colors.pink[900],
			  },
			  // Consolidated Background Colors
			  backgroundColor: {
				'surface-paper': colors.white,
				'surface-brand': colors.purple[950],
				'surface-accent': colors.purple[500],
				'surface-disabled': colors.purple[50],
        'surface-top-nav': colors.purple[50],
				'ui-info-surface': colors.blue[100],
				'ui-positive-surface': colors.green[100],
				'ui-negative-surface': colors.red[100],
				'ui-warning-surface': colors.orange[100],
				'ui-brand-surface': colors.purple[100],
				'ui-system-surface': colors.pink[100],
			  },
			  // Border Colors
			  borderColor: {
				'primary': 'rgba(49, 28, 107, 0.2)',
				'secondary': 'rgba(49, 28, 107, 0.4)',
				'accent': colors.purple[500],
				'disabled': 'rgba(49, 28, 107, 0.2)',
			  },
			  // Border Radius
			  borderRadius: {
				'small': '6px',
				'default': '12px',
				'medium': '18px',
				'large': '24px',
			  },
			  // Spacing
			  spacing: {
				'small': '4px',
				'default': '8px',
				'medium': '12px',
				'large': '16px',
				'xlarge': '20px',
			  },
			  // Margin (Distance)
			  margin: {
				'distance-small': '16px',
				'distance-default': '20px',
				'distance-medium': '28px',
				'distance-large': '40px',
			  },
			  // Typography
			  fontFamily: {
				'default': ['Inter var', 'system-ui', 'sans-serif'],
				'headings': ['Moranga', 'system-ui', 'serif'],
				'monospace': ['Fira Code', 'monospace'],
			  },
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		function ({ addVariant }) {
		  addVariant('children', '& > *')
		},
	],
}
