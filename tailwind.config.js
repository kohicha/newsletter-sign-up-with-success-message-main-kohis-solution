/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      RobotoBold: 'RobotoBold',
      RobotoRegular: 'RobotoRegular'
    },
    extend: {
      colors:{
       DarkSlateGrey: 'hsl(234, 29%, 20%)',
       CharcoalGrey: 'hsl(235, 18%, 26%)',
       Grey: 'hsl(231, 7%, 60%)',
       White: 'hsl(0, 0%, 100%)',
       Tomato: 'hsl(4, 100%, 67%)',
      }
    },
  },
  plugins: [],
}

