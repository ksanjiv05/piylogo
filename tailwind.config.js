/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // custom: [
        //   "NunitoBold",
        //   "NunitoRegular",
        //   "NunitoLight",
        //   "NunitoSemiBold",
        //   "sans-serif",
        // ],
        // NunitoBold: ["NunitoBold", "sans-serif"],
        // NunitoLight: ["NunitoLight", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
