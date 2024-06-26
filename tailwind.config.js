/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'duwet-main-bg': '#FCFAF9',
        'duwet-primary': '#386641',
        'duwet-secondary': '#A7C957',
        'duwet-accent': '#F2D246',
        'duwet-dark-text': '#313131'
      }
    },
  },
  plugins: [],
}

