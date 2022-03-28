const colors = require("tailwindcss/colors");

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
  },
  plugins: [require("@tailwindcss/forms")],
};
