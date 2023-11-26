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
          "txt40": "#7ee0ff40",
          "txt-l": "#98e6ff",
          primary: "#f4fbff",
          secondary: "#060708",
          neutral: "#cbcbe3",
          accent: {
            coral: "#ffb470",
            "coral-l": "#ffc38c",
            turquoise: "#70ffff",
            "turquoise-l": "#acffff",
            purple: "#a87ffb",
            "purple-l": "#c892ff",
          }
        }
      },
      fontFamily: {
        koulen: "Koulen, sans-serif",
        fira: "Fira Code, monospace",
        jetbrains: "JetBrains Mono, monospace",
        encode: "Encode Sans Expanded, sans-serif",
      },
      height: {
        btn: "50px",
      },
      fontSize: {
        "6xl": "73px",
        "9.1xl": "116px",
        "9xl": "115px",
        "13xl": "144.6px",
      },
      inset: {
        "nav-middle": "calc(50% - 272px)"
      },
      borderRadius: {
        "5xl": "40px"
      },
    },
  },
  plugins: [],
}

