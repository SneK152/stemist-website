const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      },
    },
    fontFamily: {
      "sans": ["DM Sans"],
      "display": ["Antic"],
    },
  },
  plugins: [],
}
