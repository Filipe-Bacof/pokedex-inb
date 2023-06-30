/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'xxs-blue': '#A6F4F9',
        'xs-blue': '#0FEBF7',
        'lg-blue': '#6ab7f5',
        'xg-blue': '#0EBDD2',
        '2xg-blue': '#19A7CE',
        '3xg-blue': '#146C94',
        'pokedex-b': '#8D072A',
        'logo-yellow': '#FFCC01',
        'logo-shadow': '#17285E',
        pokedex: '#D30A40',
      },
    },
  },
  plugins: [],
}
