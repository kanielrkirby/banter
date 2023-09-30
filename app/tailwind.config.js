/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{html,ts,tsx,js,jsx,vue}'],
  theme: {
    extend: {
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
  plugins: [],
}

