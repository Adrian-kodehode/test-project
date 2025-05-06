import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "slide-right": "slide-right 40s linear infinite",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        gridTemplateRows: {
          "[auto,auto,1fr]": "auto auto 1fr",
        },
        spotify: {
          green: "#1DB954",
          black: "#191414",
          darkgray: "#282828",
          lightgray: "#B3B3B3",
          white: "#FFFFFF",
          primary: "#1DB954",
          secondary: "#282828",
          hover: "#1ed760",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },
      fontFamily: {
        sans: [
          "Gotham",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("flowbite/plugin")],
} satisfies Config;
