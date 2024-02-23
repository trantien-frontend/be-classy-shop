/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#916841",
        "mid-white": "#f9f9f9",
        "main-color": "#1c1c1c",
      },
      fontFamily: {
        custome: ["SVN-Gotham"],
      },
    },
  },
  plugins: [],
};
