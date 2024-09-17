import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ed5929",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        'avenir-bold': ['Avenir-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;