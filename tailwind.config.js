/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
    },
    extend: {
      colors: {
        cRose: "#BE123C",
        cBlue: "#001E3C",
        cCard: "#132F4C",
        cYellow: "rgb(245,197,24)",
      },
    },
  },
  plugins: [],
};
