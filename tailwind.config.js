/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        table: '1fr 1fr 3fr'
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: [require('daisyui')]
}
