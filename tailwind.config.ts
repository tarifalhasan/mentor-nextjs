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
        "gradient-1": "linear-gradient(103deg, #194504 0%, #46B312 170.83%)",
        "people-love-us": "url('/images/people_love_us.png')",
        "people-love-us-2": "url('/images/people_love_us_2.png')",
        g5: "linear-gradient(180deg, rgba(25, 69, 4, 0.00) 0%, #194504 100%)",
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
        background_content: "rgba(255, 255, 255, 0.60)",
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
