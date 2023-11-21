/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#10151d",
          txt: "#7ee0ff",
          primary: "#f4fbff",
          secondary: "#060708",
          neutral: "#cbcbe3",
          accent: {
            coral: "#ffb470",
            turquoise: "#70ffff",
            purple: "#a87ffb",
          }
        }
      },
      fontFamily: {
        koulen: "Koulen, sans-serif",
        fira: "Fira Code, monospace",
        jetbrains: "JetBrains Mono, monospace",
        encode: "Encode Sans Expanded, sans-serif",
      }
    },
  },
  plugins: [],
}
