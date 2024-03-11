/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Anek': ['Anek Telugu',' sans-serif'],
        'Open': ['Open Sans', 'sans-serif'],
        'Lora': ['Lora', 'serif']
      },

      screens:{
        'sma': {'max':'429px'},
        'mda': {'min':'430px', 'max':'768px'}
      },
      
      backgroundImage: {
        'tech': "url('./images/laurenmank.jpg')"
      },
    },
  },
  plugins: [require("daisyui")],
}
