import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            sanSerif: string
          },
          colors: {
            primary: string,
            secondary: string
            tertiary: string
            background: string
            textOff: string,
            textOn: string,
            cardOn: string
            cardFocus: string
          },
          fontWeights: {
            thin: number,
            extralight: number,
            light: number,
            normal: number,
            medium: number,
            semibold: number,
            bold: number,
            extrabold: number,
            black: number
          },
          fontSizes: {
            12: string,
            14: string,
            16: string,
            18: string,
            20: string,
            24: string,
            28: string,
            32: string,
            36: string,
            44: string,
            52: string,
            56: string,
          },
          breakpoints: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
          },
          media: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
          }
    }
  }