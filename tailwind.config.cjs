/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: {
        light: "#adb8f6",
        DEFAULT: "#a4b0f5",
        dark: "#949edd",
      },
      secondary: {
        light: "#dd8125",
        DEFAULT: "#f58f29",
        dark: "#dd8125",
      },
      accent: {
        light: "#5774b5",
        DEFAULT: "#4464ad",
        dark: "#3d5a9c",
      },
      white: "#fff",
      black: "#000",
      transparent: colors.transparent,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
