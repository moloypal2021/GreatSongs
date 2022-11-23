/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#DBDADA",
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
        },
        red: {
          1: "#E00050",
        },
        orange: {
          1: "#F2994A",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sintony: ["Sintony", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "20px",
          xl: "18px",
        },
        center: true,
        screens: {
          "2xl": "1280px",
        },
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
