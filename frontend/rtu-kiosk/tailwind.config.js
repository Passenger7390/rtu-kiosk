/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lex: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        bgBlue: "#6b9beb",
        customBlue: "#1651c4",
        customGold: "#fff761",
        customYellow: "#dec915",
      },
    },
  },
  plugins: [],
};
