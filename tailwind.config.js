/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: '#222831',
          medium: '#393E46',
          light: '#00ADB5',
          gray: '#EEEEEE'
        }
      }
    }
  },
  plugins: []
}
