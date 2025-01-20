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
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '1',
          },
          '10%': {
            boxShadow: '0px 0px 20px 8px #42B8A2',
            opacity: '1',
          },
          '20%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '0.9',
          },
          '30%': {
            boxShadow: '0px 0px 25px 12px #33A18C',
            opacity: '1',
          },
          '40%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '0.7',
          },
          '45%': {
            boxShadow: '0px 0px 30px 10px #33A18C',
            opacity: '1',
          },
          '50%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '1',
          },
          '55%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '0.6',
          },
          '56%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '0.8',
          },
          '57%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '0.4',
          },
          '58%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '0.5',
          },
          '59%': {
            boxShadow: '0px 0px 10px 3px #42B8A2',
            opacity: '01',
          },
          '80%': {
            boxShadow: '0px 0px 25px 8px #33A18C',
            opacity: '1',
          },
          '90%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '0.8',
          },
          '91%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '0.5',
          },
          '92%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '0.7',
          },
          '93%': {
            boxShadow: '0px 0px 15px 5px #42B8A2',
            opacity: '0.2',
          },
          '100%': {
            boxShadow: '0px 0px 20px 6px #42B8A2',
            opacity: '1',
          },
        },
      }
    },
  },
  plugins: [],
}
