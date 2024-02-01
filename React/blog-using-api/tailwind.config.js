/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "clr-brown" :"#7D0A0A",
        "clr-yellow" :"#EAD196",

      }
    },
  },
  plugins: [],
}

