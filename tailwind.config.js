const colors = require("tailwindcss/colors");

// /** @type {import('tailwindcss').Config} */
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
        black: "#0c001c",
        green: {
          DEFAULT: "#09C39E",
        },
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans"],
      display: ["Exo", "sans"],
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
