const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#464F51",
        },
        white: "#FFFCFF",
        blue: colors.blue,
        black: "#0c001c",
        green: {
          DEFAULT: "#09C39E",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans"],
      display: ["Exo", "sans"],
      writing: ["Raleway", "sans"],
      mono: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
