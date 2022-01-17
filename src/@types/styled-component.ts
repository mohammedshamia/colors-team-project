import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {


    
    main:string,
    nav:{
      Bg: string,
      textColor: string,
      logo:{
        leftText:string,
        rightText:string
      }
      

    },
    hero: {
        textBold: string,
        text: string,
        main: string,
        secandry: string,

    },


    common?: {
      black: string;
      white: string;
    },
    primary?: {
      lightYallow: string;
      darkYallow: string;
      disCount: string;
    },
    background?: {
      grey: string;
      lightGrey: string;
      darkGrey: string;
      border: string;
    },

    Typography?: {
      color: string;
      fontFamily: string;
    },
  }
}
