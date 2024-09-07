import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': "#262626",
        'secondary-background': "#d7d7d9",
        'primary-foreground': "#6e44ff",
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        gluten: 'var(--font-gluten)',
        blackopsone: 'var(--font-black-ops-one)',
      }
    },
  },
  plugins: [],
};
export default config;
