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
        kakaoIcon: "#ededed",
        greenyellow: "greenyellow",
        black: "rgb(208, 208, 208)",
      },
      spacing: {
        50: "170px",
      },
    },
  },
  plugins: [],
};
