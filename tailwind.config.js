/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./node_modules/@my-company/tailwind-components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
