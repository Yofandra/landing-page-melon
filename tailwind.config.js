/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#F9B619',
        'custom-green': '#B7C54D',
      },
    },
  },
  plugins: [],
}

