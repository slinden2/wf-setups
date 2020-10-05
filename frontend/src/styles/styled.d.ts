import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;

    colors: {
      white: string;
      blue: string;
      darkBlue: string;
      lightGrey: string;
      lightGrey2: string;
      // mainLight: string;
      // secondary: string;
      // secondaryDark: string;
      // white: string;
      // black: string;
      // red: string;
      // gray: string;
    };

    mq: {
      overMobilePortrait: string;
      overTabletPortrait: string;
    };
  }
}
