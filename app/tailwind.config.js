/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#fdf6e3",
          border: "#93a1a1",
          text: "#586e75",
          hover: "#d33682",
          active: "#268bd2",
          dark: {
            bg: "#1d1d20",
            border: "#d1d1d1",
            text: "#d1d1d1",
            hover: "#d33682",
            active: "#268bd2",
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
  },
  plugins: [],
}
