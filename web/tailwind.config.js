/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Exo2: ["'Exo 2', sans-serif"],
        Open_Sans: ["'Open Sans', sans-serif"],
      },
      colors: {
        primary_orange_600: '#FF4900',
        primary_orange_100: '#330D00',
        black: '#000',
        white: '#fff',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
