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
        "open-sans": ["Open Sans", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "20px",
          xl: "18px",
        },
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        1: "linear-gradient(180deg, #D2C5C2 0%, #F23866 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
