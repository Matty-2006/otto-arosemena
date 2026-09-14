/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        calligraphy: ['var(--font-calligraphy)', 'cursive'],
      },
      colors: {
        brand: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#0284c7',
            600: '#0369a1',
            700: '#075985',
            800: '#0c4a6e',
            900: '#082f49',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
        },
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 24px 55px rgba(3, 105, 161, 0.18)',
        'glow-green': '0 0 45px rgba(34, 197, 94, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
};