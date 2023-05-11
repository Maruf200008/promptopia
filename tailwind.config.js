/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi : ['satoshi', 'sans-serif'],
        intrt : ['Inter', 'sans-serif' ]
      },
      colors : {
        'primary-orange' : '#ff5722',
      }
    },
  },
  plugins: [],
}
