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
          10: "#D2C5C2",
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
        2: "4px 4px 11px rgba(224, 0, 80, 0.3)",
      },
      backgroundImage: {
        1: "linear-gradient(180deg, #D2C5C2 0%, #F23866 100%)",
        2: "linear-gradient(180deg, rgba(210, 197, 194, 0.3) 0%, rgba(242, 56, 102, 0.3) 100%)",
      },
      dropShadow: {
        1: "15px 26px 30px rgba(188, 143, 143, 0.29)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
