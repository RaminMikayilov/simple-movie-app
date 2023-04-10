/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cRose: "#BE123C",
        cBlue: '#001E3C',
        cCard: '#132F4C',
      },
    },
  },
  plugins: [],
};
