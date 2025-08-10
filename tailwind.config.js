/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-red': '#FF0033',
        'neon-teal': '#00FFD4',
        'neon-purple': '#9D4EDD',
      },
    },
  },
  plugins: [],
};
