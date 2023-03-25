/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { poppins: ['Poppins', 'sans-serif'] },
    extend: {
      colors: {
        Lineargradient: 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        Red: 'hsl(0, 100%, 66%)',
        White: 'hsl(0, 0%, 100%)',
        Lightgrayishviolet: 'hsl(270, 3%, 87%)',
        Darkgrayishviolet: 'hsl(279, 6%, 55%)',
        Verydarkviolet: 'hsl(278, 68%, 11%)',
      },
    },
  },
  plugins: [],
};
