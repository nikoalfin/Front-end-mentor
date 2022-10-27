/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'famil':['Space Grotesk'],
    },
    extend: {
      backgroundImage: {
        'card-a': "url('./img/bg-card-front.png')",
        'card-b': "url('./img/bg-card-back.png')",
      },
      spacing : {
        '70':'70%',
        '80':'80%',
        '20':'30%',
        'ting':'680px',
      },
      colors : {
        'Whiten': 'hsl(0, 0%, 100%)',
        'Light': 'hsl(270, 3%, 87%)',
        'Dark': 'hsl(279, 6%, 55%)',
        'Very': 'hsl(278, 68%, 11%)',
        'red' : 'hsl(0, 100%, 66%)',
        'valid': 'hsl(249, 99%, 64%)',
      },
    },
  },
  plugins: [],
}
