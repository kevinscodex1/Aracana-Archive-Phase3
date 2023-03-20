/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '821px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary:"#000300",
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      },
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translateY(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat"',]
      }
    },
  },
  plugins: [],
}
