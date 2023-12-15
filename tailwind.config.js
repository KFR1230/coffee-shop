/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '638px',
      md: '976px',
      lg: '1440px',
    },
    extend: {
      backgroundImage: {
        // 'paper-pattern': "url('src/assets/paper1920.jpg')",
        // 'coffee-shop': "url('src/assets/coffee-shop.jpg')",
        // 'cook-coffee': "url('src/assets/cook-coffee.jpg')",
        // 'enjoy-coffee': "url('src/assets/enjoy-coffee.jpg')",
      },
      boxShadow: {
        'inner-b': 'inset -300px -200px 800px 0px #fff',
        'inner-mb': 'inset 0px -250px 800px 0px #fff',
        'inner-rc': 'inset -10px 0px 10px 0px #fff',
        'inner-lc': 'inset 10px 0px 10px 0px #fff',
        'outer-b': '0px 2px 10px 1px rgba(0,0,0,0.75)',
      },
      fontFamily: {
        Dosis: ['Dosis', 'cursive'],
      },
      height: {
        svh: '100svh',
      },
      minHeight: {
        svh: '100svh',
      },
    },
  },
  plugins: [],
};
