import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from '../theme/theme';

const ChakraContext: React.FC = ({children}) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ChakraContext;
