import { createTheme } from '@mui/material';
import FavoritPro from '../assets/fonts/FavoritPro-Light.otf';

export const theme = createTheme({
  typography: {
    fontFamily: 'FavoritPro',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FavoritPro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('FavoritPro'), url(${FavoritPro}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});