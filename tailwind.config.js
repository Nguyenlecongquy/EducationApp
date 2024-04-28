/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c7de4",
        text: {
          white: '#ffffff',
          DEFAULT: '#000000',
          black: '#000000'
        },
        border: {
          DEFAULT: '#e5e5e5'
        },
      }
    },

  },
  plugins: [],
};
