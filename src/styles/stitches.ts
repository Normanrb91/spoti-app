import { createStitches, defaultThemeMap } from '@stitches/react'

import { type PropertyValue } from './types'

export const { createTheme, config, css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: {
    fonts: {
    
    },
    colors: {
      tertiary: '#fb8b62',
      white: '#ffffff',
      gray: '#cccccc',
      gray50: '#f8f8f8',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray500: '#9fa2b4',
      gray700: '#374151',
      gray900: '#111827',
      grayLight: '#c5c7cd',
      grayButton100: '#f0f1f7',
      grayButton500: '#9fa2b4',
      grayDisabled: '#f2f2f2',
      grayBorder: '#dfe0eb',
      black: '#000000',
      background: '#f5f5f5',
      bgSideMenu: '#363740',
      txtSideMenu: '#a4a6b3',
      txtSideMenuActive: '#dde2ff',
      bgItemMenuActive: '#9fa2b4',
      grayDark: '#4b506d',
      text: '#252733',
      bgLogin1: '#707cb7',
      bgLogin2: '#7884bb',
      textBadgeSuccess: '#147638',
      bgBadgeSuccess: '#f2fdf5',
      textBadgeWarning: '#A85923',
      bgBadgeWarning: '#fdecce',
      textBadgeError: '#f31260',
      bgBadgeError: '#fcb0c6',
      red: '#f31260',
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
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    radii: {
      2: '2px',
      8: '8px',
      button: '100px',
      round: '50%',
    },
    space: {
      md: '1rem',
    },
    transitions: {
      default: 'all 250ms ease',
    },
    zIndices: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      toast: 9999999,
      max: 99999999,
    },
    breakpoints: {
      xs: '520px',
      sm: '900px',
      md: '1200px',
      lg: '1441px',
      xl: '1920px',
    },
  },
  media: {
    xs: '(max-width: 520px)',
    sm: '(max-width: 900px)',
    md: '(max-width: 1200px) and (min-width: 901px)',
    lg: '(max-width: 1441px)',
    xl: '(max-width: 1920px)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    motion: '(prefers-reduced-motion: reduce)',
  },
  themeMap: {
    ...defaultThemeMap,
  },
  utils: {
    bgAlpha: ([value, alpha]: [string, number]) => {
      if (value.startsWith('$')) {
        value = config.theme.colors[value.slice(1) as keyof (typeof config)['theme']['colors']].slice(1)
      } else if (value.startsWith('#')) {
        value = value.slice(1)
      }

      const [r, g, b] = value.match(/.{1,2}/g)?.map(x => parseInt(x, 16)) as number[]

      return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`,
      }
    },
    dFlex: (value: PropertyValue<'alignItems'>) => ({
      display: 'flex',
      alignItems: value,
      justifyContent: value,
    }),
    mX: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mY: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pX: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pY: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
