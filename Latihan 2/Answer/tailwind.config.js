/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'LightGrey': 'rgba(46, 54, 61, 0.979)',
        'MediumGrey': 'hsl(216, 12%, 54%)',
        'DarkBlue': 'hsl(213, 19%, 18%)',
        'VeryDarkBlue': 'hsl(216, 12%, 8%)',
        'Orange': 'hsl(25, 97%, 53%)',
      },
      fontFamily: {
        'opsi': ['Overpass'],
      },
    },
  },
  plugins: [],
}
