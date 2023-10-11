import { DefaultTheme } from 'styled-components';

export const myTheme: DefaultTheme = {
  fonts: {
    sanSerif: 'sanSerif'
  },
  colors: {
    primary: '#45505b',
    secondary: '#0563bb',
    tertiary: '#fb8b62',
    background: '#09090B'
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  breakpoints: {
    xs: '520px',
    sm: '900px',
    md: '1200px',
    lg: '1441px',
    xl: '1920px'
  },
  media: {
    xs: '(max-width: 520px)',
    sm: '(max-width: 900px)',
    md: '(max-width: 1200px) and (min-width: 901px)',
    lg: '(max-width: 1441px)',
    xl: '(max-width: 1920px)'
  }
}
    