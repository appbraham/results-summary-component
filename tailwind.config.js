/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light_red: 'hsl(0, 100%, 67%)',
        orange_yellow: 'hsl(39, 100%, 56%)',
        green_teal: 'hsl(166, 100%, 37%)',
        cobalt_blue: 'hsl(234, 85%, 45%)',

        pale_blue: 'hsl(221, 100%, 96%)',
        light_lavender: 'hsl(241, 100%, 89%)',
        dark_gray: 'hsl(224, 30%, 27%)',

        light_slate: 'hsl(252, 100%, 67%)',
        light_royal: 'hsl(241, 81%, 54%)',
        violet_blue: 'hsla(256, 72%, 46%, 1)',
        persian_blue: 'hsla(241, 72%, 46%, 0)'
      },
      fontFamily:{
        'primary': 'Hanken'
      }
    },
  },
  plugins: [],
}

