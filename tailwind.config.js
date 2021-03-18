module.exports = {
  purge: {
    node: 'layers',
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
