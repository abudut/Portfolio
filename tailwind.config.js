const { green } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode:'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cinzelDec: [
          'Cinzel Decorative'
        ],
        cinzel: [
          'Cinzel'
        ],  Yeon: [
          'Yeon Sung'
        ],  Pt: [
          'PT Serif'
        ], Anton: [
          'Anton'
        ]},
      colors: {
        cyan: colors.cyan,
        green:colors.green
    }, backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '100%': '100%',
    }
  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
