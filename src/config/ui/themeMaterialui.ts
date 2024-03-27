'use client';

import { createTheme } from "@mui/material/styles";


let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    'green_default': theme.palette.augmentColor({
      color: {
        main: '#00A09D',
      },
      name: 'green_default',
    }),
    'green_light': theme.palette.augmentColor({
      color: {
        main: '#3DD2CE',
      },
      name: 'green_light',
    }),
    'green_secondary': theme.palette.augmentColor({
      color: {
        main: '#45C057',
      },
      name: 'green_secondary',
    }),
    'gainsboro': theme.palette.augmentColor({
      color: {
        main: '#E4E4E4',
      },
      name: 'gainsboro',
    }),
    'grey_dark': theme.palette.augmentColor({
      color: {
        main: '#A0A0A0',
      },
      name: 'grey_dark',
    }),
    'grey_suva': theme.palette.augmentColor({
      color: {
        main: '#909090',
      },
      name: 'grey_suva',
    }),
    'grey_empress': theme.palette.augmentColor({
      color: {
        main: '#767676',
      },
      name: 'grey_empress',
    }),
    'black_charcoal': theme.palette.augmentColor({
      color: {
        main: '#454545',
      },
      name: 'black_charcoal',
    }),
    'black_eclipse': theme.palette.augmentColor({
      color: {
        main: '#373737',
      },
      name: 'black_eclipse',
    }),
    'yellow_default': theme.palette.augmentColor({
      color: {
        main: '#FFC008',
      },
      name: 'yellow_default',
    }),
    'red_default': theme.palette.augmentColor({
      color: {
        main: '#FF4240',
      },
      name: 'red_default',
    }),
    'blue_default': theme.palette.augmentColor({
      color: {
        main: '#53A0FA',
      },
      name: 'blue_default',
    }),
    'success': theme.palette.augmentColor({
      color: {
        main: '#00A09D',
      },
      name: 'success',
    }),
    'error': theme.palette.augmentColor({
      color: {
        main: '#FF4240',
      },
      name: 'error',
    }),
    'warning': theme.palette.augmentColor({
      color: {
        main: '#FFC008',
      },
      name: 'warning',
    }),
    // '': theme.palette.augmentColor({
    //   color: {
    //     main: '#',
    //   },
    //   name: '',
    // }),
  },
});

export default theme;