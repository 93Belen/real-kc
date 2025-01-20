/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Montserrat'],
      'h1': ['Orbitron']
    },
    extend: {
      colors: {
        // For gradient
          // primary
        'primary-green': '#42B8A2',
        'primary-pink': '#DC44D9',
          // secondary
        'secondary-red': '#D33B3E',
        'secondary-yellow': '#FFD700',
        // Red and White
        'red': '#D33B3E',
        'white': '#F7F7F7',
        // Dark Theme Layers
        'base': '#383737',
        'layer1': '#484848',
        'layer2': '#4F4E4E',
        'layer3': '#575757',
        'layer4': '#6E6D6D'
      },
      backgroundImage: {
        'kc-map': "url('/bg-map-dark.png')"
      },
      boxShadow: {
        'sm': '0 0 0 5px rgba(255, 255, 255, 1)',
      },
      animation: {
        bounce: 'bounce 1s',
        flicker: 'flicker 7s infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '20%': {
            transform: 'translateY(-40%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '30%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '40%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '80%': {
            transform: 'translateY(-20%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
        },
        flicker: {
          '0%': {
            opacity: '1',
          },
          '10%': {
            opacity: '1',
          },
          '20%': {
            opacity: '0.9',
          },
          '30%': {
            opacity: '1',
          },
          '40%': {
            opacity: '0.7',
          },
          '45%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '55%': {
            opacity: '0.6',
          },
          '56%': {
            opacity: '0.8',
          },
          '57%': {
            opacity: '0.4',
          },
          '58%': {
            opacity: '0.5',
          },
          '59%': {
            opacity: '1',
          },
          '80%': {
            opacity: '1',
          },
          '90%': {
            opacity: '0.8',
          },
          '91%': {
            opacity: '0.5',
          },
          '92%': {
            opacity: '0.7',
          },
          '93%': {
            opacity: '0.2',
          },
          '100%': {
            opacity: '1',
          },
        },
      }
    },
  },
  plugins: [],
}
