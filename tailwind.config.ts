import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green_default': '#00A09D',
      'green_light': '#3DD2CE',
      'green_secondary': '#45C057',
      'gainsboro':'#E4E4E4',
      'grey_dark': '#A0A0A0',
      'grey_suva': '#909090',
      'grey_empress': '#767676',
      'black_charcoal':'#454545',
      'black_eclipse':'#373737',
      'yellow_default':'#FFC008',
      'red_default': '#FF4240',
      'blue_default': '#53A0FA',
      'success': '#00A09D',
      'error': '#FF4240',
      'warning': '#FFC008',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
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
