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
      },
      spacing: {
        5.5: '22px',
        11.5: '46px'
      },
      content: {
        lightModeIcon: 'url("/src/img/light-mode.svg")',
        darkModeIcon: 'url("/src/img/dark-mode.svg")'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}
