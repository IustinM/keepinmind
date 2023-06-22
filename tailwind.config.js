/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
      'black':'#000000',
      'default-red':'#D63058',
       'metal-red':'#AF0000',
       'glow-red':'#FF0000',
      'ashBlack':'#121212bf',
      'bermuda': '#78dcca',
      'editGreen' :'#14a28d',
      'editGreenHover':'#14a28dcd',
      'removeRed':'#c61a1a',
      'removeRedHover':'#c61a1ace'
    },
  },
  plugins: [],
}