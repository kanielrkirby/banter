/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{html,ts,tsx,js,jsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        heading: ['Rye', 'serif'],
        'heading-secondary': ['Inknut Antiqua', 'serif'],
      },
      colors: {
        primary: '#12141A',
        secondary: '#1E2435',
        accent: '#F2DC83',
        'accent-dark': '#CF9549',
        'secondary-accent': '#845CEE',
        'secondary-accent-dark': '#6F11E5',
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase, addUtilities }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          fontFamily: 'Rye, serif',
        },
        '*,*::before,*::after': {
          fontFamily: 'Lato, sans-serif',
        },
      })
    }
  ],
}

