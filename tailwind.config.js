/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')


module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
       },
       
      fontFamily: {
        averageSans: ["Average Sans", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
        cinzel: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
})