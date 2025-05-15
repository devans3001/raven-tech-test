// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your project structure
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          first: "#483BEB",
          secondary: "#7847E1",
          accent: "#DD568D",
          dark: "#1A1A2E",
          light: "#F5F5F7",
        },
      },
    },
    plugins: [],
  };
  