/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-display)'],
      },
      colors: {
        primary: '#0066FF',
        secondary: '#00D4AA',
        dark: '#0A0E27',
        light: '#F8F9FA',
      },
    },
  },
  plugins: [],
}
