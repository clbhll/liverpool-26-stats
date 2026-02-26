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
        "lfc-red": "#C8102E",
        "lfc-red-dark": "#A50E26",
        "lfc-gold": "#F6EB61",
        "surface-900": "#0D0D0F",
        "surface-800": "#141418",
        "surface-700": "#1E1E24",
        "surface-600": "#2A2A33",
        "surface-200": "#C4C4CF",
      },
    },
  },
  plugins: [],
};
export default config;
