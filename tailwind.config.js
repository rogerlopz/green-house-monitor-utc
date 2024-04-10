/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#effefa',
          '100': '#c8ffee',
          '200': '#92fdde',
          '300': '#53f5cc',
          '400': '#20e1b6',
          '500': '#08c49e',
          '600': '#03a688',
          '700': '#077e6a',
          '800': '#0b6456',
          '900': '#0f5248',
          '950': '#01322c',
        },
        'secondary': {
          '50': '#fff1f2',
          '100': '#ffe0e3',
          '200': '#ffc6cb',
          '300': '#ff9ea6',
          '400': '#ff6673',
          '500': '#fd3646',
          '600': '#eb1728',
          '700': '#c60f1e',
          '800': '#a3111d',
          '900': '#73121a',
          '950': '#4a050b',
        },
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
}

