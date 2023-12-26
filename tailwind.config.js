/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    },
    colors: {
      brand: '#0077DC',
      dark: {
        10: '#131318',
        20: '#FFF'
      }
    },
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
      heading: ['Space Grotesk', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
