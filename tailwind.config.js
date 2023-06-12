/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['Inter', 'sans-serif'], 
      'urbanist': ['Urbanist', 'sans-serif'], 
      'arabic': ['Noto Sans Arabic', 'sans-serif'], 
      SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
   
    }
  },
  plugins: [],
}

