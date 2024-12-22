/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      grey: {
        90: "#1D1D1D",
        50: "#737373"
      },
      blue: {
        50: "#477AE0",
        70: "#355BA7"
      },
      orange: {
        20: "#E0583F",
        80: "#6C2A1E"
      },
      green: {
        40: "#88A155",
        80: "#566636"
      },
      navy: "#55678B",
      white: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}