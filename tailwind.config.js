/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      cyan: colors.cyan,
      gray: colors.neutral,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "20%": { transform: "translate(10%, 10%)" },
          "30%": { transform: "translate(3%, -3%)" },
          "40%": { transform: "translate(3%, 3%)" },
          "50%": { transform: "translate(-3%, -3%)" },
          "60%": { transform: "translate(0%, 4%)" },
          "70%": { transform: "translate(-4%, -4%)" },
          "80%": { transform: "translate(2%, 2%)" },
          "90%": { transform: "translate(-3%, -3%)" },
        },
        scratch: {
          "0%, 100%": { transform: "translateX(0)" },
          "5%, 95%": { opacity: "0.075" },
          "10%": { transform: "translateX(-1%)" },
          "20%": { transform: "translateX(1%)" },
          "30%": { transform: "translateX(-2%)" },
          "35%": { opacity: "0.09" },
          "40%": { transform: "translateX(3%)" },
          "50%": { transform: "translateX(-3%)" },
          "55%": { opacity: "0.05" },
          "60%": { transform: "translateX(8%)" },
          "70%": { transform: "translateX(-3%)" },
          "80%": { transform: "translateX(10%)" },
          "85%": { opacity: "0.02" },
          "90%": { transform: "translateX(-2%)" },
        },
        innerScratch: {
          "0%": { transform: "translateX(0)" },
          "1%": { opacity: "0.08" },
          "10%": { transform: "translateX(-1%)" },
          "20%": { transform: "translateX(1%)" },
          "30%": { transform: "translateX(-2%)" },
          "40%": { transform: "translateX(3%)" },
          "50%": { transform: "translateX(-3%)" },
          "51%": { opacity: "0.06" },
          "60%": { transform: "translateX(8%)" },
          "70%": { transform: "translateX(-3%)" },
          "80%": { transform: "translateX(10%)" },
          "81%": { opacity: "0.03" },
          "90%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(30%)" },
        },
        bounceX: {
          "0%, 50%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "25%": {
            transform: "translateX(-10%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "75%": {
            transform: "translateX(-2%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0, 1)",
          },
        },
        appear: {
          "0%": { filter: "opacity(0.0)" },
          "100%": {filter: "opacity(1)"}
        }
      },
      animation: {
        grain: "grain 0.8s steps(1) infinite",
        scratch: "scratch 0.45s steps(1) infinite",
        innerScratch: "innerScratch 2s infinite",
        "hint-scrollable": "bounceX 1s ease-in-out",
        appear: "appear .35s ease-in-out"
      },
    },
  },
};
