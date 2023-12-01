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
          },
        },
        light: {
          bg: "#ffeee9",
          txt: "#6e2942",
          "txt65": "#6e294265",
          "txt-l": "#883f59",
          "txt-a": "#76394f",
          primary: "#ba4470",
          secondary: "#fffbfa",
          neutral: "#352e2c",
          accent: {
            coral: "#ea7305",
            "coral-l": "#f8861d",
            "coral-a": "#e77f20",
            turquoise: "#00a0aa",
            "turquoise-l": "#13b6c0",
            "turquoise-a": "#1aa7b0",
            purple: "#6d4cb0",
            "purple-l": "#8867ca",
            "purple-a": "#795eaf",
          },
        },
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
        "2.1xl": "20px",
        "2.2xl": "22px",
        "2.5xl": "24px",
        "5.2xl": "57px",
        "5.5xl": "65px",
        "6xl": "73px",
        "9.1xl": "116px",
        "9xl": "115px",
        "13xl": "144px",
        // Fix bug with this size in Google Chrome
        // "13xl": "144px",
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

