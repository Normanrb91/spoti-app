import { DefaultTheme } from 'styled-components';

export const myTheme: DefaultTheme = {
  fonts: {
    sanSerif: 'sanSerif'
  },
  colors: {
    primary: '#45505b',
    secondary: '#0563bb',
    tertiary: '#18181B',
    background: '#09090B',
    textOff: '#A1A1AA',
    textOn: '#FFFFFF',
    cardOn: '#71717A1A',
    cardFocus: '#71717A80'
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
  fontSizes: {
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    36: '2.25rem',
    44: '2.75rem',
    52: '3.25rem',
    56: '3.5rem',
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
    