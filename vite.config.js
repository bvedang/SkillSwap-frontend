import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  theme: {
    extend: {
      colors: {
        primary: "#0077b6",
        "primary-hover": "#3399cc",
        "primary-active": "#005f8a",
        secondary: "#00b4d8",
        "secondary-hover": "#33c6e6",
        "secondary-active": "#008fb3",
        background: "#f1f5f8",
        text: "#023e8a",
        "text-hover": "#336699",
        "text-active": "#01264a",
        accent: "#ffcc29",
      },
    },
  },
});
