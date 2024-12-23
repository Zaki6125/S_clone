/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      '[60vw]': '60vw',
      '[500px': '500px',

    },
  },
  plugins: [],
}