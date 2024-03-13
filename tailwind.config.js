/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.js'
  ],
  theme: {
    extend: {
      colors: {
        'azuro-ocean': '#3D67FF',
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
