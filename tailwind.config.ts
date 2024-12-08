import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   satoshi: ['Satoshi', 'san']
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // 'casual': "url('/casual.png')",
        // 'formal': "url('/formal.png')",
        // 'party': "url('/party.png')",
        // 'gym': "url('/gym.png')"
      },
    },
  },
  plugins: [],
};
export default config;