import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B0082", // Deep Indigo
          light: "#6A5ACD", // Slate Blue
          dark: "#300052",
        },
        accent: {
          pink: "#FFC0CB", // Soft Pink
          cyan: "#00FFFF", // Cyan
        },
        neutral: {
          slate: "#2F4F4F", // Dark Slate
          offWhite: "#F8F8FF", // Ghost White
          gray: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
