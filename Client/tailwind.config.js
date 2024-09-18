/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'violet' : 'rgb(139 92 246)',
        'sky': 'rgb(96 165 250)',
        'black': '#020617',
      },
      fontSize: {
        xs: '0.2',
        sm: '0.3vw',
        base: '0.5vw',
        lg: '1vw',
        xl: '1.5vw',
        '2xl': '2vw',
        '3xl': '3vw',
        '4xl': '4vw',
        '5xl': '5vw',
        '6xl': '6vw',
      },
      screens: {
        'sm': '400px',
        // => @media (min-width: 400px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      },
      fontFamily:{
        garamond: ['EB Garamond', 'serif'],
        poppins:  ['Poppins', 'sans-serif'],
        agdasima: ['Agdasima','sans-serif'],
        agufina:  ['Aguafina Script','cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

