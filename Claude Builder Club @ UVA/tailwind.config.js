/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',    // Mobile landscape
      'sm': '640px',    // Small tablets
      'md': '768px',    // Tablets
      'lg': '1024px',   // Desktop
      'xl': '1280px',   // Large desktop
      '2xl': '1440px',  // Extra large desktop
      '3xl': '1600px',  // Ultra wide
      '4xl': '1920px',  // 4K displays
    },
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
        'sans': ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'beautifully-delicious': ['Beautifully Delicious', 'sans-serif'],
        'work-sans': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'normal': '600',
        'medium': '600',
        'semibold': '600',
        'bold': '600',
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
        'curve-path-1': 'curvePath1 28s ease-in-out infinite',
        'curve-path-2': 'curvePath2 34s ease-in-out infinite',
        'curve-path-3': 'curvePath3 31s ease-in-out infinite',
        'curve-path-4': 'curvePath4 26s ease-in-out infinite',
        'curve-path-5': 'curvePath5 39s ease-in-out infinite',
        'curve-path-6': 'curvePath6 32s ease-in-out infinite',
        'curve-path-7': 'curvePath7 29s ease-in-out infinite',
        'curve-path-8': 'curvePath8 36s ease-in-out infinite',
        'curve-path-9': 'curvePath9 27s ease-in-out infinite',
        'curve-path-10': 'curvePath10 33s ease-in-out infinite',
        'curve-path-11': 'curvePath11 30s ease-in-out infinite',
        'curve-path-12': 'curvePath12 37s ease-in-out infinite',
        'curve-path-13': 'curvePath13 25s ease-in-out infinite',
        'curve-path-14': 'curvePath14 35s ease-in-out infinite',
        'curve-path-15': 'curvePath15 38s ease-in-out infinite',
        'curve-path-16': 'curvePath16 24s ease-in-out infinite',
        'curve-path-17': 'curvePath17 41s ease-in-out infinite',
        'curve-path-18': 'curvePath18 28s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
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
        curvePath1: {
          '0%': { transform: 'translate(-15vw, 80vh) rotate(0deg)' },
          '25%': { transform: 'translate(25vw, 20vh) rotate(90deg)' },
          '50%': { transform: 'translate(70vw, 60vh) rotate(180deg)' },
          '75%': { transform: 'translate(90vw, 10vh) rotate(270deg)' },
          '100%': { transform: 'translate(110vw, 45vh) rotate(360deg)' },
        },
        curvePath2: {
          '0%': { transform: 'translate(110vw, 30vh) rotate(0deg)' },
          '20%': { transform: 'translate(80vw, 80vh) rotate(-72deg)' },
          '40%': { transform: 'translate(45vw, 15vh) rotate(-144deg)' },
          '60%': { transform: 'translate(20vw, 70vh) rotate(-216deg)' },
          '80%': { transform: 'translate(5vw, 40vh) rotate(-288deg)' },
          '100%': { transform: 'translate(-20vw, 85vh) rotate(-360deg)' },
        },
        curvePath3: {
          '0%': { transform: 'translate(50vw, -20vh) rotate(0deg)' },
          '30%': { transform: 'translate(10vw, 30vh) rotate(108deg)' },
          '60%': { transform: 'translate(80vw, 90vh) rotate(216deg)' },
          '100%': { transform: 'translate(30vw, 120vh) rotate(360deg)' },
        },
        curvePath4: {
          '0%': { transform: 'translate(-25vw, 40vh) rotate(0deg)' },
          '33%': { transform: 'translate(40vw, 10vh) rotate(-120deg)' },
          '66%': { transform: 'translate(85vw, 75vh) rotate(-240deg)' },
          '100%': { transform: 'translate(120vw, 55vh) rotate(-360deg)' },
        },
        curvePath5: {
          '0%': { transform: 'translate(75vw, 110vh) rotate(0deg)' },
          '25%': { transform: 'translate(30vw, 70vh) rotate(90deg)' },
          '50%': { transform: 'translate(-10vw, 25vh) rotate(180deg)' },
          '75%': { transform: 'translate(60vw, -15vh) rotate(270deg)' },
          '100%': { transform: 'translate(95vw, 35vh) rotate(360deg)' },
        },
        curvePath6: {
          '0%': { transform: 'translate(120vw, 65vh) rotate(0deg)' },
          '40%': { transform: 'translate(15vw, 90vh) rotate(144deg)' },
          '80%': { transform: 'translate(85vw, 5vh) rotate(288deg)' },
          '100%': { transform: 'translate(-30vw, 50vh) rotate(360deg)' },
        },
        curvePath7: {
          '0%': { transform: 'translate(-20vw, 15vh) rotate(0deg)' },
          '35%': { transform: 'translate(55vw, 85vh) rotate(126deg)' },
          '70%': { transform: 'translate(95vw, 35vh) rotate(252deg)' },
          '100%': { transform: 'translate(25vw, -25vh) rotate(360deg)' },
        },
        curvePath8: {
          '0%': { transform: 'translate(90vw, 120vh) rotate(0deg)' },
          '25%': { transform: 'translate(35vw, 45vh) rotate(-90deg)' },
          '50%': { transform: 'translate(-15vw, 80vh) rotate(-180deg)' },
          '75%': { transform: 'translate(65vw, 5vh) rotate(-270deg)' },
          '100%': { transform: 'translate(110vw, 60vh) rotate(-360deg)' },
        },
        curvePath9: {
          '0%': { transform: 'translate(25vw, -30vh) rotate(0deg)' },
          '50%': { transform: 'translate(75vw, 75vh) rotate(180deg)' },
          '100%': { transform: 'translate(-5vw, 110vh) rotate(360deg)' },
        },
        curvePath10: {
          '0%': { transform: 'translate(105vw, 85vh) rotate(0deg)' },
          '30%': { transform: 'translate(50vw, 20vh) rotate(108deg)' },
          '60%': { transform: 'translate(5vw, 65vh) rotate(216deg)' },
          '100%': { transform: 'translate(80vw, -10vh) rotate(360deg)' },
        },
        curvePath11: {
          '0%': { transform: 'translate(-35vw, 55vh) rotate(0deg)' },
          '40%': { transform: 'translate(30vw, 95vh) rotate(-144deg)' },
          '80%': { transform: 'translate(90vw, 25vh) rotate(-288deg)' },
          '100%': { transform: 'translate(115vw, 70vh) rotate(-360deg)' },
        },
        curvePath12: {
          '0%': { transform: 'translate(60vw, 115vh) rotate(0deg)' },
          '20%': { transform: 'translate(10vw, 50vh) rotate(72deg)' },
          '40%': { transform: 'translate(85vw, 10vh) rotate(144deg)' },
          '60%': { transform: 'translate(40vw, 80vh) rotate(216deg)' },
          '80%': { transform: 'translate(-10vw, 30vh) rotate(288deg)' },
          '100%': { transform: 'translate(70vw, -20vh) rotate(360deg)' },
        },
        curvePath13: {
          '0%': { transform: 'translate(115vw, 10vh) rotate(0deg)' },
          '33%': { transform: 'translate(45vw, 90vh) rotate(120deg)' },
          '66%': { transform: 'translate(-25vw, 35vh) rotate(240deg)' },
          '100%': { transform: 'translate(85vw, 105vh) rotate(360deg)' },
        },
        curvePath14: {
          '0%': { transform: 'translate(15vw, -25vh) rotate(0deg)' },
          '25%': { transform: 'translate(75vw, 40vh) rotate(-90deg)' },
          '50%': { transform: 'translate(20vw, 100vh) rotate(-180deg)' },
          '75%': { transform: 'translate(95vw, 65vh) rotate(-270deg)' },
          '100%': { transform: 'translate(45vw, 15vh) rotate(-360deg)' },
        },
        curvePath15: {
          '0%': { transform: 'translate(-40vw, 75vh) rotate(0deg)' },
          '50%': { transform: 'translate(65vw, -5vh) rotate(180deg)' },
          '100%': { transform: 'translate(125vw, 90vh) rotate(360deg)' },
        },
        curvePath16: {
          '0%': { transform: 'translate(80vw, 105vh) rotate(0deg)' },
          '30%': { transform: 'translate(25vw, 35vh) rotate(-108deg)' },
          '70%': { transform: 'translate(100vw, 70vh) rotate(-216deg)' },
          '100%': { transform: 'translate(-15vw, 20vh) rotate(-360deg)' },
        },
        curvePath17: {
          '0%': { transform: 'translate(125vw, 45vh) rotate(0deg)' },
          '40%': { transform: 'translate(35vw, 100vh) rotate(144deg)' },
          '80%': { transform: 'translate(-30vw, 10vh) rotate(288deg)' },
          '100%': { transform: 'translate(55vw, 85vh) rotate(360deg)' },
        },
        curvePath18: {
          '0%': { transform: 'translate(5vw, 125vh) rotate(0deg)' },
          '25%': { transform: 'translate(85vw, 55vh) rotate(90deg)' },
          '50%': { transform: 'translate(50vw, -15vh) rotate(180deg)' },
          '75%': { transform: 'translate(-20vw, 60vh) rotate(270deg)' },
          '100%': { transform: 'translate(110vw, 95vh) rotate(360deg)' },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      spacing: {
        '11': '2.75rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '22': '5.5rem',
      },
      fontSize: {
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.4' }],
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.6' }],
        'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.5' }],
        'fluid-2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.4' }],
        'fluid-3xl': ['clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)', { lineHeight: '1.3' }],
        'fluid-4xl': ['clamp(2.25rem, 1.9rem + 1.75vw, 3rem)', { lineHeight: '1.2' }],
        'fluid-5xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)', { lineHeight: '1.1' }],
        'fluid-6xl': ['clamp(3.75rem, 3rem + 3.75vw, 5.5rem)', { lineHeight: '1' }],
        'fluid-7xl': ['clamp(4.5rem, 3.5rem + 5vw, 7rem)', { lineHeight: '1' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}