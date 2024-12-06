/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'cream1': '#e7e5dd',
        'blue-primary': '#263aff',
        'gray-secondary': '#609966',
        'pink-normaly': '#344D67',
        'rainbow': 'linear-gradient(to right, #ff9865, #ff691e)',
      },
      screens: {
        // Define custom breakpoints
        'big-monitor': '1667px', // Big screen monitor breakpoint
        'laptop': '1920px',      // Medium laptop breakpoint
        'mobile': { 'max': '740px' }, // Mobile screen breakpoint
      },
    },
  },
  plugins: [],
};
