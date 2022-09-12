module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'regular': 'mali-regular'
     },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#2C3423",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
};
