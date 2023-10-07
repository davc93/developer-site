/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#f6c6c6ff',
          300: '#e52936',
          600: '#d91a1aff',
          700: '#a61414ff',
        },
        secondary: {
          100: '#e6eff3ff',
          300: '#9bbdcdff',
          600: '#065a82ff',
          700: '#054462ff',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        white: '#ffffffff',
        dark: '#000000',
        warning: {
          100: '#ffdb99ff',
          300: '#ffa500ff',
          600: '#a16800ff',
        },
        success: {
          100: '#99dbc8ff',
          300: '#00a676ff',
          600: '#007d5aff',
        },
        info: {
          100: '#a6d5faff',
          300: '#2196f3ff',
          600: '#1971b6ff',
        },
        error: {
          100: '#f6c6c6ff',
          300: '#ff0000ff',
          600: '#a61414ff',
        },
      }
    },
  }
}

