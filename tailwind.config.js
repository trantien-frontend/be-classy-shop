/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        mobile: "640px",
        tablet: "960px",
        desktop: "1280px",
      },
    },
    extend: {
      colors: {
        main: "#916841",
        "mid-white": "#f9f9f9",
        "color-primary": "#1c1c1c",
        "text-secondary": "#333",
      },
      fontFamily: {
        custome: ["SVN-Gotham"],
      },
    },
  },
  plugins: [],
};
