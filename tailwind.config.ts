import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-elite': '#1A1A1A',
        'ruby-vibrant': '#A3161A',
        'wine-prestige': '#5E0B0E',
        'champagne-gold': '#C5A059',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'tenor': ['Tenor Sans', 'sans-serif'],
      },
      letterSpacing: {
        'widest-elite': '0.15em',
      },
      animation: {
        'pulse-ruby': 'pulse-ruby 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        'pulse-ruby': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(163, 22, 26, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 60px rgba(163, 22, 26, 1), 0 0 100px rgba(163, 22, 26, 0.7)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        'elite': '20px',
      },
    },
  },
  plugins: [],
}

export default config
