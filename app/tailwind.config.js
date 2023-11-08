/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{html,ts,tsx,js,jsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
        heading: ['Offside', 'serif'],
      },
      colors: {
        fg: "#000000",
        bg: "#f0f0f0",
        card: {
          50: "#f8ece6",
          100: "#ffcdb2",
          300: "#ffb4a2",
          500: "#e5989b",
          700: "#b5838d",
          900: "#6d6875",
          950: "#32343c"
        },
        primary: {
          50: "#fffbe5",
          100: "#fff7cc",
          200: "#fff099",
          300: "#ffe866",
          400: "#ffe033",
          500: "#ffe347",
          600: "#ccad00",
          700: "#998200",
          800: "#665700",
          900: "#332b00",
          950: "#1a1600"
        },
        error: {
          50: "#fde7e7",
          100: "#fccfcf",
          200: "#f8a0a0",
          300: "#f57070",
          400: "#f14141",
          500: "#f03333",
          600: "#be0e0e",
          700: "#8f0a0a",
          800: "#5f0707",
          900: "#300303",
          950: "#180202"
        },
        success: {
          50: "#eafce8",
          100: "#d5f9d2",
          200: "#abf4a4",
          300: "#81ee77",
          400: "#57e949",
          500: "#44e635",
          600: "#24b616",
          700: "#1b8811",
          800: "#125b0b",
          900: "#092d06",
          950: "#041703"
        },
        info: {
          50: "#e7f4fe",
          100: "#cfe9fc",
          200: "#9ed4fa",
          300: "#6ebef7",
          400: "#3ea8f4",
          500: "#259df3",
          600: "#0b75c1",
          700: "#085891",
          800: "#053b61",
          900: "#031d30",
          950: "#010f18"
        },
        G: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#949494",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d"
        },
      },
    },
  },
  plugins: [
    function({ addComponents, addBase, addUtilities, matchComponents }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          fontFamily: 'Offside, serif',
        },
        '*,*::before,*::after': {
          fontFamily: 'Noto Sans, sans-serif',
        },
        '*::-webkit-scrollbar,*::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
          width: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: '#1E2435B0',
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
        },
      })

      addComponents({
        '.link': {
          "@apply text-primary-400 relative hover:scale-105 transition-all duration-150 after:absolute after:content-[''] after:left-0 after:bottom-0 after:rounded-full after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-400 after:transition-all after:duration-150": ''
        },
        '.btn': {
          "@apply bg-primary-500 text-black px-2 py-3 rounded-md border-black border-2 hover:scale-110 hover:bg-black hover:text-primary-400 transition-all duration-150": ''
        },
      })
    }
  ],
}

