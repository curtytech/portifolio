/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'primary': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'mydark': '#312D2F',
      'mylight': '#FAFAFA',
      'primary': '#4474BF',
      'secondary': '#797B90',
      'alternative': '#7FA5C7',
      'lightbg': '#f3f2ef',
      'darkbg': '#312D2F'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}