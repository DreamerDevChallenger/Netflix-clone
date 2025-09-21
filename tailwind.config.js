/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#141414", // Netflix dark
        accent: "#e50914", // Netflix red
        textPrimary: "#ffffff",
        textSecondary: "#b3b3b3",
      },
    },
  },
  plugins: [],
};
