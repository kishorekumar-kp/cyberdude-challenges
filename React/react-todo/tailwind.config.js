/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dark:"#9BA4B5",
        extra_dark:"#212A3E",
        medium:"#445882",
        light:"#F1F6F9",
      }
    },
  },
  plugins: [],
};
