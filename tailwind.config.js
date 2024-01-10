/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens : {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
       colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        customGray: '#7F7F7F',
        black: 'hsl(0, 0%, 7%)'
       }
    },
     textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     fontFamily: {
        overpass: ['Figtree', 'sans-serif'],
      }, 
  },
  plugins: [],
}