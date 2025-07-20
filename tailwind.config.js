/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteFill: "#fffff",
        backgdFill: "#F9F9F9",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        heading: ["Bricolage Grotesque", "sans-serif"],
      }
    },
  },
  plugins: [],
}