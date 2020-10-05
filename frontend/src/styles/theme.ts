import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",

  colors: {
    white: "#fff",
    blue: "rgb(84,105,212)",
    darkBlue: "rgb(44,65,172)",
    lightGrey: "rgb(247,250,252)",
    lightGrey2: "rgb(217,220,222)",
  },

  mq: {
    overMobilePortrait: "(min-width: 420px)",
    overTabletPortrait: "(min-width: 768px)",
  },
};

export { theme };
