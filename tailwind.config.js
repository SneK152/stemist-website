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
        black: "#0c001c",
        green: {
          DEFAULT: "#09C39E",
        },
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans"],
      display: ["Exo", "sans"],
      writing: ["Arimo", "sans"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
