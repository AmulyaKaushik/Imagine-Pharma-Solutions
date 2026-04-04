/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Deep navy + cyan palette matching reference design */
        primary: {
          50:  '#e9edff',
          100: '#d5dcff',
          200: '#b1bfff',
          300: '#8197ff',
          400: '#5672ef',
          500: '#3a55d2',
          600: '#243fad',
          700: '#172f84',
          800: '#0e1e59',
          900: '#04091e',
        },
        teal: {
          50:  '#ebfdff',
          100: '#cff9ff',
          200: '#9ff1ff',
          300: '#6de6ff',
          400: '#38d5f8',
          500: '#1cb8e8',
          600: '#1497cd',
          700: '#1179a6',
          800: '#125f80',
          900: '#124f68',
        },
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

