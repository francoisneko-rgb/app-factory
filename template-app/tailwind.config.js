/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#208AEF",
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF",
        surface: "#F0F0F3",
        "surface-selected": "#E0E1E6",
        content: "#000000",
        "content-secondary": "#60646C",
        border: "#E5E7EB",
      },
      spacing: {
        "4.5": 18,
      },
      borderRadius: {
        sm: 8,
        md: 12,
        lg: 16,
      },
    },
  },
  plugins: [],
};