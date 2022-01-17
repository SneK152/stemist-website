const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
    fontFamily: {
      "sans": ["DM Sans", "sans"],
      "display": ["Libre Franklin", "sans"],
      "writing": ["Antic", "sans"],
      "mono": ["Source Code Pro", "monospace"],
    },
  },
  plugins: [],
}
