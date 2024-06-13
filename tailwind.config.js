/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "color-text-primary": "var(--color-text-primary)",
        "color-text-secondary": "var(--color-text-secondary)",
        "color-grad-primary": "var(--color-grad-primary)",
        "color-grad-secondary": "var(--color-grad-secondary)",
      },
    },
  },
  plugins: [],
};
