module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          air: "#eef2ff",
          feather: "#e0e7ff",
          touch: "#c7d2fe",
          lightest: "#a5b4fc",
          lighter: "#818cf8",
          light: "#6366f1",
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
          darker: "#3730a3",
          darkest: "#312e81",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}