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
        'secondary-background': "#484849",
        'primary-foreground': "#6e44ff",
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        gluten: 'var(--font-gluten)',
        blackOpsOne: 'var(--font-black-ops-one)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
