/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Include the HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in the src folder
  ],
  corePlugins: {
    preflight: false,              // Disable Tailwind's base styles if needed
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
