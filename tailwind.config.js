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
        'brandwhite': '#f5f5f5',
      },
      container: {
        center: true,
        padding: {
         DEFAULT: '1rem',
        sm: '3rem',}
      },
    },
  },
  plugins: [],
};

