/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hf: {
          bg: '#0B0F19',
          surface: '#111827',
          card: '#151C2E',
          hover: '#1E293B',
          border: '#1F2937',
          borderLight: '#374151',
          yellow: '#FFBF00',
          yellowDark: '#D99B00',
          orange: '#FF8800',
          purple: '#8B5CF6',
          pink: '#EC4899',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          textMuted: '#9CA3AF',
          textSubtle: '#6B7280'
        },
        cyber: {
          cyan: '#00f0ff',
          purple: '#8b5cf6',
          violet: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
