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
        primary: '#1E2435',
        'primary-faded': '#262E44',
        'primary-light': '#234267',
        'primary-dark': '#12141A',
        secondary: '#234B54',
        'secondary-dark': '#0C2E36',
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
        h1: {
          fontSize: '2.5rem',
        },
        h2: {
          fontSize: '2rem',
        },
        h3: {
          fontSize: '1.75rem',
        },
        h4: {
          fontSize: '1.5rem',
        },
        h5: {
          fontSize: '1.25rem',
        },
        h6: {
          fontSize: '1rem',
        }
      })
      addComponents({
        '.btn-secondary-accent': {
          "@apply px-4 py-3 bg-gradient-to-br from-accent to-accent-dark after:absolute relative after:bg-gradient-to-tr after:from-accent-dark after:to-accent hover:after:opacity-100 after:opacity-0 after:content-[''] after:w-full after:h-full after:transition-all after:duration-300 after:left-0 after:top-0 border-slate-900 border-4 rounded-sm text-black text-opacity-80 hover:scale-105 transition-all duration-150 hover:text-opacity-95 font-heading-secondary font-black after:-z-10": ''
        },
        '.link-primary-accent': {
          "@apply text-secondary-accent self-start text-sm hover:underline hover:brightness-125 transition-all duration-100": ''
        }
      })
    }
  ],
}

