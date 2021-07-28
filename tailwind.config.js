module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#1C0707",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
};
