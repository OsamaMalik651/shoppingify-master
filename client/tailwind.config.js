/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'highlight': '#F9A109',
      'pageBackground': '#FAFAFE',
      'iconGray': '#C1C1C4',
      'iconBlack': '#34333A',
      'placeholderGray': '#BDBDBD',
      'bgOrange': '#F9A109',
      'bgLightOrange': '#FFF0DE'
    },
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"]
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1': '100%'
      }
    },

  },
  plugins: [],
}

