/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#140D27",
        pink: "#D434FE",
      },

      screens: {
        mobile_lg: "500px",
        tablet: "892px",
        mb: { max: "508px" },
        ms: { max: "390px" },
        max_tab: { max: "744px" },
      },
      backgroundImage: {
        "security-pattern": "url('./src/assets/images/vector.png')",
        "hero-pattern": "url('./src/assets/images/metrix 1.png')",
      },
    },
  },
  plugins: [],
};
