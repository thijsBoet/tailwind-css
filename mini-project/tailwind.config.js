module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [require('tailwindcss-debug-screens')],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    variants: {
      extend: {},
    }
  }
}