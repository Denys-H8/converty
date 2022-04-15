import React, {memo} from 'react';
import {Flex} from '@chakra-ui/react';
import LoadingIcon from './icons/LoadingIcon';

const Loading: React.FC = () => (
  <Flex alignItems="center" flex={1} justifyContent="center">
    <LoadingIcon />
  </Flex>
);

export default memo(Loading);
