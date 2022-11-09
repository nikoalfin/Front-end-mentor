/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'famil':['Manrope'],
    },
    extend: {
      colors : {
        'Whiten': 'hsl(0, 0%, 100%)',
        'Dark-blue': 'hsl(227, 35%, 25%)',
        'Very': 'hsl(0, 0%, 60%)',
        'red':'hsl(14, 92%, 95%)',
        'red2':'hsl(15, 100%, 70%)',
      },
    },
  },
  plugins: [],
}
