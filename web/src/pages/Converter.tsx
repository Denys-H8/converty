import React from 'react';
import {Flex, Heading} from '@chakra-ui/react';
import Loading from '../components/Loading';

const Converter: React.FC = () => {
  return (
    <Flex flex={1}>
      <Heading as="h1" size="lg">
        Converter Page
      </Heading>
    </Flex>
  );
};

export default Converter;
