/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc037b",
        secondary: "#10B981",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
}