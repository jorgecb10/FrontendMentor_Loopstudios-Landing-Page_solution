/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" ,"./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(0, 0%, 55%)",
        "very-dark-blue": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        "alata": ["Alata", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

