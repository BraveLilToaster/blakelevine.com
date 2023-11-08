/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: colors.violet,
        secondary: colors.emerald,
        background: "#0C0C0C",
        text: "#FFF",
        divider: "#222"
      },
    },
  },
  plugins: [],
};
