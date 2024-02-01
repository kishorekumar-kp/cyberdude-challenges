/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "dark": "#04364A",
        "medium":"#176B87",
        "light":"#DAFFFB",
        "normal":"#64CCC5"
      },
      fontFamily:{
        "Roboto":"Roboto"
      }
    },
  },
  plugins: [],
};
