/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'famil':['Rubik'],
    },
    extend: {
      colors : {
      'Very-dark-blue': 'hsl(226, 43%, 10%)',
      'Dark-blue': 'hsl(235, 46%, 20%)',
      'Desatuated-blue': 'hsl(235, 45%, 61%)',
      'Pale-Blue': 'hsl(236, 100%, 87%)',
        'Blue': 'hsl(246, 80%, 60%)',
        'Light-red': 'hsl(15, 100%, 70%)',
        'Soft-blue': 'hsl(195, 74%, 62%)',
        'Light-red2': 'hsl(348, 100%, 68%)',
        'Lime-green': 'hsl(145, 58%, 55%)',
        'Violet':' hsl(264, 64%, 52%)',
        'Soft-orange':' hsl(43, 84%, 65%)',
      },
    },
  },
  plugins: [],
}
