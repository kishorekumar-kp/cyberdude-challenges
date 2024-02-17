/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#E1F0DA",
        normal: "#D4E7C5",
        Medium: "#BFD8AF",
        dark: "#99BC85",
      },
     fontFamily:{
      Poppins:"Poppins"
      }
    },
  },
  plugins: [],
};
