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
          dark: {
            bg: "#1d1d20",
            border: "#d1d1d1",
            text: "#d1d1d1",
            hover: "#d33682",
          },
        },
        solarized: {
          base03: "#002b36",
          base02: "#073642",
          base01: "#586e75",
          base00: "#657b83",
          base0: "#839496",
          base1: "#93a1a1",
          base2: "#eee8d5",
          base3: "#fdf6e3",
          yellow: "#b58900",
          orange: "#cb4b16",
          red: "#dc322f",
          magenta: "#d33682",
          violet: "#6c71c4",
          blue: "#268bd2",
          cyan: "#2aa198",
          green: "#859900",
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
