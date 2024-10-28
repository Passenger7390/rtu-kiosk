/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lex: ["Lexend Deca", "sans-serif"],
      },
    },
    colors: {
      "bg-color": "#6b9beb",
      "color-blue": "#1651c4",
      "color-gold": "#fff761",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
