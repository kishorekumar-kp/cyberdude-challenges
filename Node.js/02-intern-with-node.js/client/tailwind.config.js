/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#1F2544",
        beige:"#DAC0A3",
        light_beige:"#F8F0E5"
      }
    },
  },
  plugins: [],
}

