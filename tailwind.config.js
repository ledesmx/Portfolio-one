import { transform } from 'framer-motion';

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
      animation: {
        // Title animation
        "grow-0": "growUp .5s .3s both",
        "grow-10": "growUp .5s .36s both",
        "grow-20": "growUp .5s .42s both",
        "grow-30": "growUp .5s .48s both",
        "grow-40": "growUp .5s .54s both",
        "grow-50": "growUp .5s .60s both",
        "grow-60": "growUp .5s .66s both",
        "grow-70": "growUp .5s .72s both",
        "grow-80": "growUp .5s .78s both",
        "grow-90": "growUp .5s .84s both",
        "grow-100": "growUp .5s .90s both",
        // Subtitle animation
        "type-0": "type .01s 1.5s both",
        "type-10": "type .01s 1.54s both",
        "type-20": "type .01s 1.58s both",
        "type-30": "type .01s 1.62s both",
        "type-40": "type .01s 1.66s both",
        "type-50": "type .01s 1.7s both",
        "type-60": "type .01s 1.74s both",
        "type-70": "type .01s 1.78s both",
        "type-80": "type .01s 1.82s both",
        "type-90": "type .01s 1.86s both",
        "type-100": "type .01s 1.9s both",
        "type-110": "type .01s 1.94s both",
        "type-120": "type .01s 1.98s both",
        "type-130": "type .01s 2.02s both",
        "type-140": "type .01s 2.06s both",
        "type-150": "type .01s 2.1s both",
        "type-160": "type .01s 2.14s both",
        "type-170": "type .01s 2.18s both",
        "type-180": "type .01s 2.22s both",
      },
      keyframes: {
        growUp: {
          "0%": { transform: "translateY(40px) scale(0)" },
          '100%': { transform: "translateY(0) scale(1)" },
        },
        type: {
          "0%": { fontSize: "0" },
          "100%": { fontSize: "inherit" },
        },
      },
    },
  },
  plugins: [],
}

