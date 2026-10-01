/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#9E1127',
          'crimson-dark': '#7A0A1C',
          'crimson-light': '#C41935',
          gold: '#C89B3C',
          'gold-light': '#E5C07B',
          'gold-dark': '#A37922',
          teal: '#007A83',
          'teal-dark': '#005D64',
          'teal-light': '#229DA7',
          forest: '#0F3E36',
          sand: '#F7F4EE',
        },
        surface: {
          light: '#FFFFFF',
          'light-subtle': '#F8FAFC',
          'light-alt': '#F1F5F9',
          dark: '#0B1120',
          'dark-card': '#11192C',
          'dark-alt': '#16223B',
          'dark-border': '#1E2D4A',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-gold': '0 0 25px rgba(200, 155, 60, 0.25)',
        'glow-crimson': '0 0 25px rgba(158, 17, 39, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'card-hover-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
