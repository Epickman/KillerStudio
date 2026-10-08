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
        black: '#000000',
        'ksf-bg': '#0d0a12',
        'ksf-surface': '#120f1a',
        'ksf-border': '#1e1a2a',
        'ksf-muted': '#2a2535',
        'ksf-text': '#f0ecf8',
        'ksf-secondary': '#9b93b0',
        'ksf-accent': '#e8177a',
        'ksf-accent-hover': '#c4105e',
        'ksf-accent-glow': 'rgba(232, 23, 122, 0.3)',
        'ksf-gold': '#c9a84c',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'drip': 'drip 2s ease-in infinite',
        'blood-fall': 'bloodFall 3s ease-in infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 23, 122, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(232, 23, 122, 0.7)' },
        },
        drip: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '60%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '0' },
        },
        bloodFall: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(60px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
