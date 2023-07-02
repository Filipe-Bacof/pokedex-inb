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
      keyframes: {
        blink1: {
          '0%': { backgroundColor: '#0FEBF7' },
          '50%': { backgroundColor: '#A6F4F9' },
          '100%': { backgroundColor: '#0FEBF7' },
        },
        blink2: {
          '0%': {
            boxShadow: '0 0 50px 5px rgba(255,255,255,1)',
          },
          '50%': {
            boxShadow: '0 0 50px 5px rgba(255, 255, 255, 0.1)',
          },
          '100%': {
            boxShadow: '0 0 50px 5px rgba(255, 255, 255, 1)',
          },
        },
        blink3: {
          '0%': { backgroundColor: '#0EBDD2' },
          '50%': { backgroundColor: '#0FEBF7' },
          '100%': { backgroundColor: '#0EBDD2' },
        },
        blink4: {
          '0%': { backgroundColor: '#A6F4F9' },
          '50%': { backgroundColor: '#D1FFFF' },
          '100%': { backgroundColor: '#A6F4F9' },
        },
      },
      animation: {
        blink1: 'blink1 1s infinite',
        blink2: 'blink2 1s steps(10) infinite',
        blink3: 'blink3 1s infinite',
        blink4: 'blink4 1s infinite',
      },
    },
  },
  plugins: [],
}
