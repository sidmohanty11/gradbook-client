module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: "#262626",
          faded: "00000059",
          dark: "#000",
          logo: "#0c1618",
        },
        green: {
          logo: "#7ed957",
          forhover: "#44bd32",
        },
        white: {
          mywhite: "#f5f6fa",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
