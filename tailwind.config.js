const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },

      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        position: "left, right, top, bottom",
      },
    },
  },
  plugins: [],
};
