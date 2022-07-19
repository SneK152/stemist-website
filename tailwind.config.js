const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        gray: colors.gray,
        white: "#FFFCFF",
        black: "#1D263B",
        red: {
          DEFAULT: "#AD5E5C",
        },
        purple: {
          DEFAULT: "#9881BF",
        },
        blue: {
          DEFAULT: "#CCE5FF",
          light: "2081C3",
          sky: "#A8E2EC"
        },
        orange: {
          DEFAULT: "#D3896E"
        },
        green: {
          DEFAULT: "#87D3AC"
        }
    },
    fontFamily: {
      sans: ["Raleway", "sans"],
      display: ["Open Sans", "sans"],
      writing: ["Open Sans", "sans"],
    },
    screens: {
      short: { raw: "(min-height: 500px)" },
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
