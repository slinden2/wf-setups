import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      mainLight: string;
      secondary: string;
      secondaryDark: string;
      white: string;
      black: string;
    };
  }
}
