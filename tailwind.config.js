/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Primary: dark navy matching logo "IMAGINE" text (#1A2368) ── */
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#6675e0',
          500: '#4655c8',
          600: '#2e3fae',
          700: '#1e3090',
          800: '#1a2878',
          900: '#1a2368',   /* logo "IMAGINE" navy */
        },
        /* ── Teal/Cyan: logo flask turquoise (#06B6D4) ── */
        teal: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',   /* logo flask cyan */
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

