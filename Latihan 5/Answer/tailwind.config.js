/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'famil':['Epilogue'],
    },
    extend: {
      colors : {
        'Whiten': 'hsl(0, 0%, 98%)',
        'Dark': 'hsl(0, 0%, 8%)',
        'Very': 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
}
