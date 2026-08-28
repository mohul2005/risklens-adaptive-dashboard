/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0B0F19',
          card: '#111827',
          surface: '#1F2937',
          hover: '#374151',
          border: '#374151'
        },
        brand: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          crimson: '#EF4444',
          amber: '#F59E0B',
          violet: '#8B5CF6',
          blue: '#3B82F6'
        },
        risk: {
          safe: '#10B981',
          warning: '#F59E0B',
          breach: '#F97316',
          critical: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.35)',
        'glow-red': '0 0 15px rgba(239, 68, 68, 0.35)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.35)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
};
