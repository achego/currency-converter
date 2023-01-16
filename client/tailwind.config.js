/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        sprim: {
          100: '#383782',
          200: '#2A2968',
          300: '#23235A',
          400: '#1e1d49',
        },
        caccent: {
          DEFAULT: '#4CBBE6'
        }
      }
    },
  },
  plugins: [],
}
