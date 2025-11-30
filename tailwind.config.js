/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Darker theme for more dramatic look
        background: '#000000',
        'background-secondary': '#0a0a0a',
        'background-panel': '#050505',
        foreground: '#FFFFFF',
        'foreground-muted': '#B8B8B8',
        accent: '#0066FF',
        'accent-hover': '#0052CC',
        gold: '#D4AF37',
        'gold-light': '#F4D03F',
        'gold-dark': '#B8941E',
        light: '#FAFAF8',
        dark: '#000000',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        'nav': '0.1em',
        'wide': '0.12em',
        'wider': '0.16em',
      },
    },
  },
  plugins: [],
}
