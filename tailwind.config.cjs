/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'swipeLeft': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-8px)' },
        },
        'swipeRight': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'swipeLeft': 'swipeLeft 1.5s ease-in-out infinite',
        'swipeRight': 'swipeRight 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
