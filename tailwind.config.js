const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rocketseat: {
          background: "#121214",
          primary: "#8257E5",
        },
      },
    },
  },
  plugins: [],
};
