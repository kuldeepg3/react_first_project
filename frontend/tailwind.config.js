/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hover:scale-up-and-fade:hover": {
          transform: "scale(1.03)",
          transition: "transform 0.05 ease-in-out",
        },
      };
      addUtilities(newUtilities, ["hover", "responsive"]);
    },
  ],
};
