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
        'kc-map': "url('/bg-map.png')"
      },
      boxShadow: {
        'sm': '0 0 0 5px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [],
}