/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All component paths
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
