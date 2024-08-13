// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        "main-start": "#4FACFE",
        "main-end": "#00F2FE",
        "gray-normal": "#6C7580",
        "gray-main": "#4B5563",
        background: "#F6F7FB",
      },
    },
  },
  plugins: [],
};
