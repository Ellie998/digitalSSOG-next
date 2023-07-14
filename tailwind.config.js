/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
      colors: {
        kakaoSkyblue: "#92e7ff8a",
        kakaoBlue: "#92caff8a",
        kakaoPurple: "#929dff8a",
        kakaoYellow: "rgb(255, 235, 50)",
        kakaoIcon: "#ededed",
        greenyellow: "greenyellow",
        black: "rgb(208, 208, 208)",
      },
      spacing: {
        50: "170px",
        "305px": "305px",
      },
      maxWidth: {
        "90p": "90%",
      },
      keyframes: {
        underBar: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        opacity0to100: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        closeAnimation: {
          "0%": { opacity: 1, background: "black" },
          "100%": { opacity: 0, background: "white" },
        },
      },
      transitionProperty: {
        position: "position, bottom,transform, background, height, width",
      },
    },
  },
  plugins: [],
};
