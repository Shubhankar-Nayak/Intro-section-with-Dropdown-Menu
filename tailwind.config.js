/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        Epilogue : ["Epilogue"]
      },
      screens: {
        "tablet" : "576px",
        "laptop" : "748px",
      }
    },
  },
  plugins: [],
}

