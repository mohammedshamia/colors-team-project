import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    common?: {
      black: string;
      white: string;
    };
    primary?: {
      lightYallow: string;
      darkYallow: string;
      disCount: string;
    };
    background?: {
      grey: string;
      lightGrey: string;
      darkGrey: string;
      border: string;
    };

    Typography?: {
      color: string;
      fontFamily: string;
    };
  }
}
