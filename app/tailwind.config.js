/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": {
          bg: "#1d1d20",
          text: "#d1d1d1",
          border: "#e5e7eb",
        },
        "brand-light": {
          bg: "#fdf6e3",
          text: "#073642",
          border: "#073642",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}
