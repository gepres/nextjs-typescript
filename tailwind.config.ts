import type { Config } from "tailwindcss";
import colorsGeneral from "./src/config/colorsGeneral";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colorsGeneral,
        smoke: {
          100: '#F9F9F9',
          200: '#F6F6F6',
          300: '#F3F3F3',
          400: '#F0F0F0'
        },
      },
      fontFamily: {
        sans: ['var(--font-museosans)'],
      },
    },
  },
  plugins: [],
};
export default config;
