/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#d6bb97",
          burgundy: "#600400",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
