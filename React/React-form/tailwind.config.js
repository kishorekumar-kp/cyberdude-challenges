/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#944E63",
        medium:"#B47B84",
        normal:"#CAA6A6",
        light:"#FFE7E7",
      }
    },
  },
  plugins: [],
}

