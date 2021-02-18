module.exports = {
  purge: [
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/*.tsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#0fa9e6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
