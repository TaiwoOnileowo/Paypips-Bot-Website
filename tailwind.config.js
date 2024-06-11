/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#14181f",
        "dark-surface": "#1a1a1a",
        "accent-bg": "#2f323b",
        "light-text": "#f0f2f5",
        "muted-text": "#d1d6e1",
        "light-bg": "#fff",
        "dark-text": "#1b1f28",
        "accent-text": "#fff",
        "primary-purple": "#5e19b3",
        "light-gray": "#ebecf0",
        "medium-gray": "#363f52",
        "blue-accent": "#3d87f5",
        "gray-background": "#f4f5f7",
        "subtle-bg": "#246763",
        "light-blue": "e8f0fc"
      },
      backgroundImage: (theme) => ({
        "primary-gradient1": "linear-gradient(135deg, #246763, #5e19b3)",
        "primary-gradient": "linear-gradient(90deg, #14181f 0%, #1a1a1a 100%)",
        "shining-gradient":
          "linear-gradient(135deg, #5e19b3, #3d87f5)",
        "white-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
          "black-gradient": "linear-gradient(90deg, #2f323b 0%, #ebecf0 100%)"
      }),
      keyframes: {
        move: {
          "0%": { left: "16.5%", opacity: 1 },
          "50%": { left: "50%", opacity: 1 },
          "100%": { left: "80%", opacity: 0 },
        },
      },
      animation: {
        move: "move 2s linear infinite",
      },
    },
    screens: {
      ip: "200px",
      xs: "250px",
      ss: "380px",
      ts: "600px",
      xsm: "700px",
      sm: "800px",
      msm: "1020px",
      bsm: "1100px",
      md: "1280px",
    },
  },
  plugins: [],
};
