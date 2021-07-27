module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    container: {
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
      }
    },
    extend: {},
  },
  variants: {},
  plugins: [
  ],
}