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
      },
      colors: {
        primary: '#3b82f6',   // Tailwind blue
        secondary: '#1e293b', // dark slate for background
      },
    },
  },
  plugins: [],
}
