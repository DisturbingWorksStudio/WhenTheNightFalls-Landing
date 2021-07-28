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
    extend: {
      animation: {
        "zoom": "zoom 0.3s ease-in",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(0.4)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
