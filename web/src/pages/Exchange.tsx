import React from 'react';
import {Flex, Heading} from '@chakra-ui/react';
import useCurrency from '../hooks/useCurrency';
import Loading from '../components/Loading';

// TODO: handle error
const Exchange: React.FC = () => {
  const {isLoading, isError, data} = useCurrency();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex flex={1}>
      <Heading as="h1" size="lg">
        Exchange Page
      </Heading>
    </Flex>
  );
};

export default Exchange;
