/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
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
        "100%": { opacity: 0, background: "black" },
      },
      fadeInDown: {
        "0%": { opacity: 0.5, transform: "translate3d(0, -10px, 0)" },
        "90%": { opacity: 1 },
        to: { opacity: 1 },
      },
      fadeOutDown: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
      },
      fadeInUp: {
        "0%": {
          opacity: "0.7",
          transform: "translate3d(0, 100%, 0)",
        },
        to: {
          opacity: "1",
          transform: "translateZ(0)",
        },
      },
    },
    animation: {
      fadeInDown: " fadeInDown 0.5s",
      fadeOutDown: " fadeOutDown 0.5s",
      fadeInUp: "fadeInUp 0.5s",
      closeAnimation: "closeAnimation 0.3s",
      opacity0to100: "opacity0to100 0.5s",
    },
    transitionProperty: {
      position: "position, bottom,transform, background, height, width",
    },
  },
};
export const plugins = [];
