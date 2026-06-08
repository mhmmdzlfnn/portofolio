import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
      },
      // Kita tambahkan ini juga supaya animasinya bisa dipakai sebagai class
      animation: {
        'progress-bar': 'progress 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;