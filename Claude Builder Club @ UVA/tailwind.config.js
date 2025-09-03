/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette using only specified RGB values
        'coral': 'rgb(204, 120, 92)',     // #cc785c - Primary accent color
        'sage': 'rgb(130, 129, 121)',     // #828179 - Secondary neutral color
        'cream': 'rgb(240, 239, 234)',    // #f0efea - Light background color
        'white': 'rgb(255, 255, 255)',    // #ffffff - Pure white
        'charcoal': 'rgb(20, 20, 19)',    // #141413 - Dark text/background color
        // New colors for hero section
        'hero-bg': '#f0f0eb',             // Hero background color (updated to match spec)
        'hero-bar': '#bfbfba',            // Small bar color
        'hero-text': '#191919',           // Text color
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'beautifully-delicious': ['Beautifully Delicious', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delayed': 'slideUp 0.8s ease-out 0.2s both',
        'slide-up-delayed-2': 'slideUp 0.8s ease-out 0.4s both',
        'slide-up-delayed-3': 'slideUp 0.8s ease-out 0.6s both',
        'float': 'float 6s ease-in-out infinite',
        'fade-scale': 'fadeScale 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-gentle': 'pulseGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}