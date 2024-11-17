import tailwindScrollbar from "tailwind-scrollbar";

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
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "100%": { width: "40ch" },
        },
        blink: {
          "0%, 50%": { "border-color": "black" },
          "50%, 100%": { "border-color": "transparent" },
        },
      },
      animation: {
        type: "type 2s steps(40, end) forwards",
        blink: "blink 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
