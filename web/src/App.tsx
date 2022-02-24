import React, {memo} from 'react';
import {Flex, Heading} from '@chakra-ui/react';

const App: React.FC = () => (
  <Flex h="100vh" w="100vw">
    <Heading as="h1" size="lg">
      Converty
    </Heading>
  </Flex>
);

export default memo(App);
