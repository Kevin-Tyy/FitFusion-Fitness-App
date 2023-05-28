/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#0D1D2E",
        "gray-50": "#0D1D2E",
        "gray-100": "#0C88EF",
        "gray-500": "#D8D8D8",
        "primary-100": "#0C141C",
        "primary-300": "#132130",
        "primary-500": "#0D1D2E",
        "secondary-400": "#244792",
        "secondary-500": "#244792",

      },
      backgroundImage : (theme) => ({
        "background-yellowred": "linear-gradient(90deg, #FF616A 0% , #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphics.png')" 
      }),
      fontFamily : {
        dmsans : ["DM Sans", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"],
      },
      content : {
        evolvetext : "url('./assets/EvolveText.png')",  
        abstractwaves : "url('./assets/AbstractWaves.png')",  
        sparkles : "url('./assets/Sparkles.png')",  
        circles : "url('./assets/Circles .png')",  
      },
      screens : {
        "xs" : "480px",
        "sm" : "768px",
        "md" : "1080px",

      }
    },
  },
  plugins: [],
}
