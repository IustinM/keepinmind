/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1296.5px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdx': {'max': '867px'},
      // => @media (max-width: 767px) { ... }
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '539px'},
      'vsm': {'max': '439px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'metal-hover': '#565584b5',
      'bookElementBg':'#7d7d7d97',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'black':'#000000',
      'default-red':'#D63058',
       'metal-red':'#AF0000',
       "transparent-text":"#00000089",
       'glow-red':'#FF0000',
      'ashBlack':'#121212bf',
      'bermuda': '#78dcca',
      'editGreen' :'#14a28d',
      'editGreenHover':'#14a28dcd',
      'removeRed':'#c61a1a',
      'removeRedHover':'#c61a1ace',
      'disabledButtonRed':'#d6305799',
      'sky-blue':'#4280dc',
      'movie-purple':'#8b46ec',
      'movie-green':'#2cbd8d'
    },
  },
  plugins: [],
}