const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans Narrow", ...defaultTheme.fontFamily.sans],
        anton: ["Anton"],
      },
      colors: {
        delayedYellow: "#FCFE00",
        vividPink: "#FF0F7A",
        springGreen: "#39FF14",
        electricPurple: "#5501EE",
      },
      backgroundImage: {
        slide2: "url('/slide2.png')",
      },
      dropShadow: {
        text: "0px 5px 5px rgba(0, 0, 0, 0.56)",
      },
    },
  },
  plugins: [],
};
