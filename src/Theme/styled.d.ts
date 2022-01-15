import "styled-components";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme {
    nav:{
      Bg: string,
      textColor: string,
      logo:{
        leftText:string,
        rightText:string
      }
      

    }
    hero: {
        textBold: string,
        text: string,
        main: string,
        secandry: string,

    }



  }
}
