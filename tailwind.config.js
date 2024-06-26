/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "themeOrange": "#DC4A2D",
        "lightGray":"#888888",
        "boldTextColor":"#3D3D3D",
        "textColor":"#5D5D5D",
      }
    },
  },
  plugins: [],
}

