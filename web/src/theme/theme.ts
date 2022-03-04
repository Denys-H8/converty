import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    text: {
      black: '#404040',
      gray: '#A09F9F',
      blue: '#0F4264',
    },
    bg: {
      white: '#FFF',
      gray: '#F5F5F5',
    },
  },
});

export default theme;
