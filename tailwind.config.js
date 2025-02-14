/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1B3249',    // Ink Blue - for primary actions and headings
          secondary: '#2C2C2C',  // Classic Black - for secondary text and UI elements
          accent: '#9E2B25',     // Red Ribbon - for accents and highlights
          leather: '#8B6B4E',    // Aged Leather - for decorative elements
          background: '#F5F1E6', // Paper Cream - for backgrounds
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} 