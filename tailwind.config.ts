import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
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
