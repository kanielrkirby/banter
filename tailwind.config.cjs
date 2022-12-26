/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#1b2131',
					200: '#1c2432',
					300: '#1e2b36',
					700: '#366170',
					800: '#3c7d8b',
					900: '#45979d',
				},
				accent: {
					100: '#efefef',
				},
				error: {
					100: '#6f1a0e',
					200: '#510a0a',
					500: '#de7e73',
				},
				success: {
					100: '#00ff00',
					500: '#ccffcc',
				},
			},
		},
	},
	plugins: [],
}
/*
p
1b2131
1c2432
1e2b36
s
366170
3c7d8b
45979d
error
ff0000
ffcccc
success
00ff00
ccffcc
*/
