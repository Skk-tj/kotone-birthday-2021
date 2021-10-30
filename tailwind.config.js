module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      }
    }
  },
  variants: {},
  plugins: [],
}