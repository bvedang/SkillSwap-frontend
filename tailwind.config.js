/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c51bf", // Indigo
        "primary-hover": "#667eea", // Light indigo
        "primary-active": "#434190", // Dark indigo
        secondary: "#22d3ee", // Cyan
        "secondary-hover": "#4fd1e1", // Light cyan
        "secondary-active": "#1c9ea1", // Dark cyan
        background: "#1f2937", // Dark gray
        text: "#f8f8f8", // Off-white
        "text-hover": "#c0c0c0", // Light gray
        "text-active": "#ffffff", // White
        accent: "#fbbf24", // Yellow
      },
    },
  },
  plugins: [],
};
