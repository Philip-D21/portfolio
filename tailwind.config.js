/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-green': '#27AE60',
        'neon-blue': '#2D9CDB',
        'off-white': '#F9FAFB',
        'dark-navy': '#1A1A1A',
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        ibmplexsans: ['IBM Plex Sans', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 