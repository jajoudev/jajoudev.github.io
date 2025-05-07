/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      dropShadow: {
        'react-glow': "10 10 10em #61dafbaa"
      }
    },
  },
  plugins: [],
}
