/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-dark": "var(--color-dark)",
        "color-light": "var(--color-light)",
        "color-accent": "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
