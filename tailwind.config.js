/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteFill: "#fffff",
        backgdFill: "#F9F9F9",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        heading: ["Bricolage Grotesque", "sans-serif"],
      },
      screens: {
        xxl: { max: "1280px" },
        lgg: { max: "1024px" },
        mdd: { max: "820px" },
        ssm: { max: "700px" },
        sssm: { max: "390px" },
      },
    },
  },
  plugins: [],
};
