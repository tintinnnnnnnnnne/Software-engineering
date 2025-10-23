/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // scan all HTML files in the root folder
    "./src/**/*.{js,ts,jsx,tsx,html}", // scan any subfolder inside src
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
