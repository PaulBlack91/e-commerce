/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#aa99cd',
        'secondary': '#a6d1e4',
        'danger': '#a99cda',
        'yellow': '#fefedf',
        'rosabanner': '#ffcce1',
        'btn-shopnow': '#0ce9e3',
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },



      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
        'bgimg': 'url(assets/Banner/bg.jpg)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      },
    },
  },
  plugins: [],
};

