const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        klasha: {
          primary: "#EF2C5A",
          dark: "#0A0A0A",
          white: "#fff",
          light: "#FFFBF7",
        },
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans], // Define Inter como fonte padrão
      },
    },
  },
  plugins: [],
};
