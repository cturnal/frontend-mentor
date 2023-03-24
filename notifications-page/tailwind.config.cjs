/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      paragraph: '16px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        red1: 'hsl(1, 90%, 64%)',
        blue1: 'hsl(219, 85%, 26%)',
        white1: ' hsl(0, 0%, 100%)',
        veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
        lightGrayishBlue1: 'hsl(211, 68%, 94%)',
        lightGrayishBlue2: 'hsl(205, 33%, 90%)',
        grayishBlue: 'hsl(219, 14%, 63%)',
        darkGrayishBlue: 'hsl(219, 12%, 42%)',
        veryDarkBlue: 'hsl(224, 21%, 14%)',
      },
    },
  },
  plugins: [],
};
