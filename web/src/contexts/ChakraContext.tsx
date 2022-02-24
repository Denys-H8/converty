import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';

const ChakraContext: React.FC = ({children}) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default ChakraContext;
