module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#464F51",
        },
        night: "#0c001c",
        white: "#FFFCFF",
        blue: {
          DEFAULT: "#5386E4",
        },
        black: "#0c001c",
        green: {
          DEFAULT: "#09C39E",
        },
      },
    },
    fontFamily: {
      sans: ["Libre Franklin", "sans"],
      display: ["DM Sans", "sans"],
      writing: ["Antic", "sans"],
      mono: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
