/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class',
  safelist: [
    'mr-2',
    'pt-1',
    'text-sky-500'
  ]
}
