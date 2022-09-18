
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter' , 'sans-serif']
    },

    extend: {
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        'duo-gradient': 'linear-gradient(130deg, #9572FC 28.08%, #43E7AD 63.94%, #E1D55D 8.99%)',
        'ad-gradient': ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
