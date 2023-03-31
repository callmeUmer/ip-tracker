/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("./images/pattern-bg-desktop.png")',
      }
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      neutral: {
        100: "#333333",
        200: "#999999"
      }
    }
  },
  plugins: [],
}

