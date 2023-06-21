/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "app" : "url('/img/t3.jpg')"
      }
    },
  },
  plugins: [],
}

