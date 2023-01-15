/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024',
        xl: '1440px',
      },
      colors: {
        primary: '#ffbe33',
        primaryHover: '#e69c00',
        secondary: '#222831',
        gray: '#8492a6',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}