import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",
  boxShadow:
    "rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px",
  boxShadowLight:
    "rgba(60, 66, 87, 0.12) 0px 2px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 2px 0px",

  colors: {
    white: "#fff",
    blue: "rgb(84,105,212)",
    darkBlue: "rgb(44,65,172)",
    lightGrey: "rgb(247,250,252)",
    lightGrey2: "rgb(217,220,222)",
    darkGrey: "rgb(85,92,112)",
    silver: "rgb(227,232,238)",
    inputFieldGrey: "hsl(0,0%,80%)",
    red: "rgb(237,95,116)",
  },

  mq: {
    overMobilePortrait: "(min-width: 420px)",
    overTabletPortrait: "(min-width: 768px)",
  },
};

export { theme };
