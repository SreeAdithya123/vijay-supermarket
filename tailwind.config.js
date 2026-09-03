/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
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
        surface: {
          cream: '#fcfbf7',
          mint: '#f2fbf5',
          soft: '#f8faf6',
          dark: '#0a2e1d',
        },
        warm: {
          yellow: '#f59e0b',
          amber: '#d97706',
          light: '#fffbeb',
          orange: '#f97316',
          peach: '#fff7ed',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'm3-sm': '0px 1px 3px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        'm3-md': '0px 2px 6px 2px rgba(0, 0, 0, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        'm3-lg': '0px 4px 12px 3px rgba(0, 0, 0, 0.08), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        'm3-xl': '0px 8px 24px 4px rgba(0, 0, 0, 0.12), 0px 2px 6px 0px rgba(0, 0, 0, 0.16)',
        'glow-green': '0 0 20px rgba(22, 163, 74, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
