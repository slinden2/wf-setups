import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    boxShadowLight: string;

    colors: {
      white: string;
      blue: string;
      darkBlue: string;
      lightGrey: string;
      lightGrey2: string;
      darkGrey: string;
      silver: string;
      inputFieldGrey: string;
      red: string;
    };

    mq: {
      overMobilePortrait: string;
      overTabletPortrait: string;
    };
  }
}
