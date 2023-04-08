/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontWeight: {
      bold: 700,
      medium: 500,
      normal: 400
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("./images/pattern-bg-desktop.png")',
        'hero-mobile': 'url("./images/pattern-bg-mobile.png")',
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

