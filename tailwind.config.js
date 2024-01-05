/** @type {import('tailwindcss').Config} */
//@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Satisfy&display=swap');
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['Manrope', 'Ubuntu', 'sans-serif'],
  },
  },
  plugins: [],
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {},
      fontFamily: {
          'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
      },
  },
  plugins: [],
}
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
}