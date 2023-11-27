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
          "txt65": "#7ee0ff65",
          "txt-l": "#98e6ff",
          "txt-a": "#7fd7f2",
          primary: "#f4fbff",
          secondary: "#060708",
          neutral: "#cbcbe3",
          accent: {
            coral: "#ffb470",
            "coral-l": "#ffc38c",
            "coral-a": "#f7b67a",
            turquoise: "#70ffff",
            "turquoise-l": "#acffff",
            "turquoise-a": "#9af4f4",
            purple: "#a87ffb",
            "purple-l": "#c892ff",
            "purple-a": "#ba7df8",
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
        "5.2xl": "57px",
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
      boxShadow: {
        "xl-wide": "0 8px 25px 0",
      },
    },
  },
  plugins: [],
}

