import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      white: string;
      blue: string;
      lightGrey: string;
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
