/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: {
    //     sans: ['"IBM Plex Sans"', 'sans-serif'],
    //     serif: ['"IBM Plex Sans"', 'sans-serif'],
    //     mono: ['"IBM Plex Mono"', 'monospace'],
    // },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        typography: 'rgb(var(--color-typography) / <alpha-value>)',
      },
      maxWidth: {
        text: '70ch',
      },
    },
  },
  plugins: [],
}

