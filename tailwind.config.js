module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        mainBaseColor: "#005c58",
        allTextColor: "#56606e",
        lebelColor: "#000000",
      },
      margin: {
        addProductmt: "20rem",
        mt: "40rem",
        mmt: "-85rem",
        mmt1: "-37rem",
        mmt2: "-44rem",
      },
      boxShadow: {},
      padding: {},
      height: {},
      fontSize: {
        18: "18px",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
