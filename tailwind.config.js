/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/html/*.html",
    "./*.php",
    "./app/**/*.php",
    "../../**/*.php",
    "../**/*.php",
    "./src/js/**/*.js",
    "./src/css/**/*.css"
  ],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
      '3xl': '2560px',
    },

    container: {
      center: true,
      screens: {
        DEFAULT: '1800px',
      },
    },
    
    extend: {
      colors: {
        gray: '#9395ABCC',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },

  plugins: [],
};
