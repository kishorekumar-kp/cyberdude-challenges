/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "clr-dark" :"#27374D",
        "clr-medium" :"#526D82",
        "clr-normal" :"#9DB2BF",
        "clr-light" :"#DDE6ED",
        "clr-exlight" :"#b9c3ca",
      }
    },
  },
  plugins: [],
}