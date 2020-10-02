import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",

  colors: {
    white: "#fff",
    blue: "rgb(84,105,212)",
    lightGrey: "rgb(247,250,252)",
    // lightGrey: "rgb(247,125,252)",
    // mainLight: "#4E4A59",
    // secondary: "#839073",
    // secondaryDark: "#6E6362",
    // white: "#eee",
    // black: "#111",
    // red: "#8b0000",
    // gray: "#aaa",
  },

  mq: {
    overMobilePortrait: "(min-width: 420px)",
    overTabletPortrait: "(min-width: 768px)",
  },
};

export { theme };
