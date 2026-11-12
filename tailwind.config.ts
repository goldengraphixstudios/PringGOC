import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050D1A",
          900: "#0A1628",
          800: "#0F2035",
          700: "#1B3A5C",
          600: "#2B5A8C",
          500: "#3B7ABD",
        },
        gold: {
          600: "#8B7130",
          500: "#C9A84C",
          400: "#E8C84A",
          300: "#F0DCA0",
        },
        warm: {
          50: "#FDFCFA",
          100: "#F8F6F1",
          200: "#EFEAE0",
          300: "#DDD5C5",
          400: "#B5A78E",
        },
      },
      fontFamily: {
        heading: ["Bodoni Moda", "serif"],
        body: ["Jost", "sans-serif"],
        cursive: ["Cormorant Garamond", "serif"],
        display: ["Oswald", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
