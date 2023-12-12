import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          main: "#01AB41",
          secondary: "#fff",
        },
        system: {
          positive: "#0E8345",
          warning: "#F6BC2F",
        },
        content: {
          primary: "#252525",
          secondary: "#8C8C8C",
          tertiary: "#434343",
        },
        border: "rgba(0, 0, 0, 0.10)",
      },
      fontSize: {
        "heading-2": [
          "2.5rem",
          {
            lineHeight: "130%",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
