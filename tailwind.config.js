/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0f1c',
          800: '#111827',
          700: '#1f2937',
        },
        neon: {
          blue: '#00f2ea',
          purple: '#ff00ff',
          green: '#0aff0a',
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}