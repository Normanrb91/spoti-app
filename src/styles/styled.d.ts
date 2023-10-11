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